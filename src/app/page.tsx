import { Experience } from 'components/Experience/Experience'
import { Intro } from 'components/Intro/Intro'
import { JsonLdScripts } from 'components/SEO/JsonLdScripts'

import styles from 'styles/Index.module.scss'

export default function Index() {
  return (
    <div className={styles.page}>
      <JsonLdScripts />
      <div className="blob-container" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <div className={styles.shell}>
        <Intro />
        <Experience />
      </div>
    </div>
  )
}
