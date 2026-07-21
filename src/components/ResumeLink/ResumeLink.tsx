import Link from 'next/link'

import styles from './ResumeLink.module.scss'

export const RESUME_HREF = 'doc/resume_Krzysztof_Kucharski.pdf'

type ResumeLinkProps = {
  className?: string
}

export const ResumeLink = ({ className }: ResumeLinkProps) => {
  return (
    <Link
      prefetch={false}
      className={[styles.resumeLink, className].filter(Boolean).join(' ')}
      href={RESUME_HREF}
      target="_blank"
      rel="noopener noreferrer"
    >
      View my Resume
    </Link>
  )
}
