import { ResumeLink } from 'components/ResumeLink/ResumeLink'
import { Social } from 'components/Social/Social'

import styles from './Intro.module.scss'

const CONTACT_EMAIL = 'krzysiekkucharski7@gmail.com'

export const Intro = () => {
  return (
    <header className={styles.intro}>
      <h1 className={styles.name}>Krzysztof Kucharski</h1>
      <p className={styles.role}>Software engineer</p>
      <p className={styles.lede}>
        Backend systems and interactive tools. ING, Goldman Sachs, Samsung.
      </p>
      <a className={styles.email} href={`mailto:${CONTACT_EMAIL}`}>
        {CONTACT_EMAIL}
      </a>
      <div className={styles.actions}>
        <ResumeLink />
        <Social />
      </div>
    </header>
  )
}
