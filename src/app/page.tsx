import { Header } from 'components/Header/Header'
import { ProjectsListView } from 'components/Projects/ProjectsListView'
import { JsonLdScripts } from 'components/SEO/JsonLdScripts'
import Link from 'next/link'

import styles from 'styles/Index.module.scss'

export default function Index() {
  return (
    <div className={styles.indexPage}>
      <JsonLdScripts />
      <div className="mt-[150px] grid w-full place-items-center pb-[150px]">
        <div className="w-full max-w-[2000px] xl:px-[150px]">
          <Header />
          <div className={styles.viewMyResume}>
            <Link prefetch={false} className={styles.viewMyResumeLink} href="doc/resume_Krzysztof_Kucharski.pdf" target="_blank">
              View my Resume
            </Link>
          </div>
        </div>
        <ProjectsListView />
      </div>
    </div>
  )
}
