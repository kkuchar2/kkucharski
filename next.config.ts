import type { NextConfig } from 'next'
import path from 'path'

const isStaticExport = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: 'export' as const } : {}),
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/components')],
  },
}

export default nextConfig
