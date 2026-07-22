import { Experience } from 'components/Experience/Experience'
import { Intro } from 'components/Intro/Intro'
import { JsonLdScripts } from 'components/SEO/JsonLdScripts'

import styles from 'styles/Index.module.scss'

export default function Index() {
  return (
    <div className={styles.page}>
      <JsonLdScripts />
      <div className={styles.shell}>
        <Intro />
        <Experience />
      </div>
    </div>
  )
}
