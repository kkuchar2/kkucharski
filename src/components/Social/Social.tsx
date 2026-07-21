import { GitHub } from 'components/svg/GitHub'
import { LinkedIn } from 'components/svg/LinkedIn'
import Link from 'next/link'

import styles from './Social.module.scss'

export const Social = () => {
  return (
    <nav className={styles.social} aria-label="Social profiles">
      <Link
        href="https://www.linkedin.com/in/kkuchar/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        aria-label="LinkedIn profile"
      >
        <LinkedIn width={22} height={22} />
      </Link>
      <Link
        href="https://github.com/kkuchar2"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        aria-label="GitHub profile"
      >
        <GitHub width={22} height={22} />
      </Link>
    </nav>
  )
}
