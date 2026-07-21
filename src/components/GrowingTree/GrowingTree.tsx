'use client'

import { useEffect, useMemo, useRef, type CSSProperties } from 'react'

import styles from './GrowingTree.module.scss'

type Seg = {
  x0: number
  y0: number
  cx: number
  cy: number
  x1: number
  y1: number
  width: number
  alpha: number
  /** Normalized 0–1 timeline */
  start: number
  end: number
}

type BuildNode = {
  x0: number
  y0: number
  cx: number
  cy: number
  x1: number
  y1: number
  width: number
  alpha: number
  length: number
  children: BuildNode[]
}

const VIEW_W = 1600
const VIEW_H = 1200
const OX = 800
/** Trunk origin sits on the bottom edge of the canvas (= bottom of the screen). */
const OY = VIEW_H
const START_LEN = 155
const MIN_LEN = 4
const GROW_MS = 4200

type BirdConfig = {
  id: string
  /** Flight path class (1/3 →, 2/4 ←) */
  path: 1 | 2 | 3 | 4
  /** 1 = left→right, −1 = right→left */
  dir: 1 | -1
  top: string
  duration: string
  delay: string
  flapDuration: string
  flapDelay: string
}

function createBirds(): BirdConfig[] {
  // path 1/3 → right, 2/4 → left; long delays need fill-mode so they stay off-screen
  const seeds = [
    { path: 1 as const, dir: 1 as const, top: 12, duration: 38, delay: 0, flap: 1.6, flapDelay: -0.4 },
    { path: 2 as const, dir: -1 as const, top: 26, duration: 42, delay: 4, flap: 1.85, flapDelay: -1.1 },
    { path: 3 as const, dir: 1 as const, top: 18, duration: 35, delay: 11, flap: 1.45, flapDelay: -0.2 },
    { path: 4 as const, dir: -1 as const, top: 34, duration: 44, delay: 18, flap: 1.7, flapDelay: -0.9 },
    { path: 1 as const, dir: 1 as const, top: 22, duration: 40, delay: 24, flap: 1.55, flapDelay: -0.55 },
    { path: 2 as const, dir: -1 as const, top: 40, duration: 36, delay: 31, flap: 1.9, flapDelay: -1.4 },
    { path: 3 as const, dir: 1 as const, top: 15, duration: 46, delay: 8, flap: 1.5, flapDelay: -0.7 },
    { path: 4 as const, dir: -1 as const, top: 30, duration: 39, delay: 27, flap: 1.75, flapDelay: -0.3 },
  ]

  return seeds.map((s, i) => ({
    id: `bird-${i}`,
    path: s.path,
    dir: s.dir,
    top: `${s.top}%`,
    duration: `${s.duration}s`,
    delay: `${s.delay}s`,
    flapDuration: `${s.flap}s`,
    flapDelay: `${s.flapDelay}s`,
  }))
}

function createRng(seed: number) {
  let s = seed % 2147483647
  if (s <= 0) s += 2147483646
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

/** Point on quadratic Bézier at t ∈ [0,1] */
function quadPoint(
  t: number,
  x0: number,
  y0: number,
  cx: number,
  cy: number,
  x1: number,
  y1: number,
) {
  const u = 1 - t
  return {
    x: u * u * x0 + 2 * u * t * cx + t * t * x1,
    y: u * u * y0 + 2 * u * t * cy + t * t * y1,
  }
}

function strokePartial(ctx: CanvasRenderingContext2D, s: Seg, ink: string, t: number) {
  const progress = Math.max(0, Math.min(1, t))
  if (progress <= 0) return

  ctx.globalAlpha = s.alpha
  ctx.strokeStyle = ink
  ctx.lineWidth = s.width
  ctx.beginPath()
  ctx.moveTo(s.x0, s.y0)

  if (progress >= 1) {
    ctx.quadraticCurveTo(s.cx, s.cy, s.x1, s.y1)
  } else {
    // Approximate growing tip with sampled points along the curve
    const steps = Math.max(2, Math.ceil(12 * progress))
    for (let i = 1; i <= steps; i++) {
      const p = quadPoint((i / steps) * progress, s.x0, s.y0, s.cx, s.cy, s.x1, s.y1)
      ctx.lineTo(p.x, p.y)
    }
  }
  ctx.stroke()
}

function generateOrganicTree(seed: number): Seg[] {
  const rand = createRng(seed)
  // Small noise helpers — keep topology stable, only reshape limbs
  const jitter = (amount: number) => (rand() - 0.5) * 2 * amount
  const between = (lo: number, hi: number) => lo + rand() * (hi - lo)

  const build = (
    x: number,
    y: number,
    angle: number,
    branchLen: number,
    depth: number,
  ): BuildNode | null => {
    if (branchLen <= MIN_LEN) return null

    // Length noise stays narrow so recursion depth (~segment count) stays similar
    const drawnLen = branchLen * between(0.94, 1.06)
    const endX = x + Math.cos(angle) * drawnLen
    const endY = y + Math.sin(angle) * drawnLen
    const midX = (x + endX) * 0.5
    const midY = (y + endY) * 0.5
    const bend = jitter(depth === 0 ? 0.03 : 0.16) * drawnLen
    const t = Math.min(1, (branchLen - MIN_LEN) / (START_LEN - MIN_LEN))

    const node: BuildNode = {
      x0: x,
      y0: y,
      cx: midX - Math.sin(angle) * bend,
      cy: midY + Math.cos(angle) * bend,
      x1: endX,
      y1: endY,
      width: Math.max(0.35, 0.4 + t * 2.8),
      alpha: 0.48 + t * 0.52,
      length: drawnLen,
      children: [],
    }

    // Classic turtle shrink with light variance (density-preserving)
    const childBase = branchLen * between(0.68, 0.76)
    // ±20° ± ~6°
    const rightFork = ((20 + jitter(6)) * Math.PI) / 180
    const leftFork = ((20 + jitter(6)) * Math.PI) / 180

    // Always both children — no random dropouts (those swing density hard)
    const right = build(endX, endY, angle + rightFork, childBase * between(0.94, 1.06), depth + 1)
    const left = build(endX, endY, angle - leftFork, childBase * between(0.94, 1.06), depth + 1)
    if (right) node.children.push(right)
    if (left) node.children.push(left)

    // Fixed spur schedule: one side shoot on odd depths only → stable extra count
    if (depth >= 1 && depth <= 5 && depth % 2 === 1) {
      const spurDir = rand() > 0.5 ? 1 : -1
      const spur = ((28 + jitter(8)) * Math.PI) / 180 * spurDir
      const spurChild = build(endX, endY, angle + spur, childBase * between(0.42, 0.55), depth + 1)
      if (spurChild) node.children.push(spurChild)
    }

    return node
  }

  const trunkLean = jitter(0.07)
  const root = build(OX, OY, -Math.PI / 2 + trunkLean, START_LEN, 0)
  if (!root) return []

  // Always exactly one lateral pair — same density, varied pose
  {
    const lift = START_LEN * between(0.28, 0.4)
    const baseY = OY - Math.cos(trunkLean) * lift
    const baseX = OX + Math.sin(trunkLean) * lift
    const outward = between(0.5, 0.7)
    const len = START_LEN * between(0.4, 0.5)
    const a = build(baseX, baseY, -Math.PI / 2 + trunkLean + outward, len, 1)
    const b = build(baseX, baseY, -Math.PI / 2 + trunkLean - outward, len * between(0.92, 1.08), 1)
    if (a) root.children.push(a)
    if (b) root.children.push(b)
  }

  const flat: Seg[] = []
  let cursor = 0

  const schedule = (node: BuildNode, start: number) => {
    const duration = 0.035 + (node.length / START_LEN) * 0.055
    const end = start + duration
    flat.push({
      x0: node.x0,
      y0: node.y0,
      cx: node.cx,
      cy: node.cy,
      x1: node.x1,
      y1: node.y1,
      width: node.width,
      alpha: node.alpha,
      start,
      end,
    })
    cursor = Math.max(cursor, end)

    const childStart = start + duration * 0.85
    for (const child of node.children) {
      schedule(child, childStart)
    }
  }

  schedule(root, 0)

  const span = Math.max(cursor, 0.001)
  for (const s of flat) {
    s.start /= span
    s.end /= span
  }

  return flat
}

export const GrowingTree = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const birds = useMemo(() => createBirds(), [])
  const pathClass = {
    1: styles.path1,
    2: styles.path2,
    3: styles.path3,
    4: styles.path4,
  } as const

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let frame = 0
    let cancelled = false

    const run = () => {
      if (cancelled) return

      const ctx = canvas.getContext('2d', { alpha: true })
      if (!ctx) return

      const ink =
        getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#f4f5f2'

      // New shape each visit; topology stays density-stable
      const seed = (Math.floor(Math.random() * 2147483646) + 1) | 0
      const segments = generateOrganicTree(seed)

      // Match buffer to on-screen size so a large CSS scale stays sharp
      const rect = canvas.getBoundingClientRect()
      const cssW = Math.max(rect.width || window.innerWidth * 1.35, 1)
      const cssH = Math.max(rect.height || cssW * (VIEW_H / VIEW_W), 1)
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const maxEdge = 3840
      let bufW = Math.floor(cssW * dpr)
      let bufH = Math.floor(cssH * dpr)
      if (Math.max(bufW, bufH) > maxEdge) {
        const fit = maxEdge / Math.max(bufW, bufH)
        bufW = Math.floor(bufW * fit)
        bufH = Math.floor(bufH * fit)
      }

      canvas.width = bufW
      canvas.height = bufH

      const sx = bufW / VIEW_W
      const sy = bufH / VIEW_H
      const useLogical = () => ctx.setTransform(sx, 0, 0, sy, 0, 0)

      useLogical()
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduceMotion) {
        for (const s of segments) strokePartial(ctx, s, ink, 1)
        ctx.globalAlpha = 1
        return
      }

      const settled = document.createElement('canvas')
      settled.width = bufW
      settled.height = bufH
      const settledCtx = settled.getContext('2d')
      if (!settledCtx) return
      settledCtx.setTransform(sx, 0, 0, sy, 0, 0)
      settledCtx.lineCap = 'round'
      settledCtx.lineJoin = 'round'

      const settledFlags = new Uint8Array(segments.length)
      const start = performance.now()

      const tick = (now: number) => {
        if (cancelled) return
        const t = Math.min(1, (now - start) / GROW_MS)
        const eased = 1 - (1 - t) ** 2.4

        // Commit finished limbs BEFORE blitting, or they vanish for a frame
        for (let i = 0; i < segments.length; i++) {
          if (settledFlags[i]) continue
          const s = segments[i]
          if (eased >= s.end) {
            strokePartial(settledCtx, s, ink, 1)
            settledFlags[i] = 1
          }
        }

        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.clearRect(0, 0, bufW, bufH)
        ctx.drawImage(settled, 0, 0)
        useLogical()

        for (let i = 0; i < segments.length; i++) {
          if (settledFlags[i]) continue
          const s = segments[i]
          if (eased < s.start || eased >= s.end) continue
          const local = (eased - s.start) / (s.end - s.start)
          strokePartial(ctx, s, ink, local)
        }

        ctx.globalAlpha = 1
        if (t < 1) {
          frame = requestAnimationFrame(tick)
        } else {
          for (let i = 0; i < segments.length; i++) {
            if (settledFlags[i]) continue
            strokePartial(settledCtx, segments[i], ink, 1)
            settledFlags[i] = 1
          }
          ctx.setTransform(1, 0, 0, 1, 0, 0)
          ctx.clearRect(0, 0, bufW, bufH)
          ctx.drawImage(settled, 0, 0)
        }
      }

      frame = requestAnimationFrame(tick)
    }

    // Wait a frame so CSS layout size is available before allocating the bitmap
    frame = requestAnimationFrame(run)

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className={styles.wrap} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} width={VIEW_W} height={VIEW_H} />
      <div className={styles.sky}>
        {birds.map((bird) => (
          <div
            key={bird.id}
            className={`${styles.birdContainer} ${pathClass[bird.path]}`}
            style={
              {
                '--bird-top': bird.top,
                '--bird-duration': bird.duration,
                '--bird-delay': bird.delay,
                '--flap-duration': bird.flapDuration,
                '--flap-delay': bird.flapDelay,
              } as CSSProperties
            }
          >
            <div
              className={`${styles.bird} ${bird.dir < 0 ? styles.birdLeft : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
