import { TechnologyGrid } from 'components/TechnologyGrid/TechnologyGrid'

import { portfolioConfig } from '../../portfolioConfig'

import styles from './Experience.module.scss'

const TECH_PREVIEW = 7

export const Experience = () => {
  return (
    <section className={styles.section} aria-labelledby="experience-heading">
      <div className={styles.headingBlock}>
        <h2 id="experience-heading" className={styles.heading}>
          Experience
        </h2>
      </div>
      <ol className={styles.list}>
        {portfolioConfig.work.map((item) => (
          <li key={`${item.company}-${item.startDate}`} className={styles.item}>
            <div className={styles.when}>
              <span className={styles.date}>
                {item.startDate} – {item.endDate}
              </span>
            </div>
            <div className={styles.content}>
              <h3 className={styles.company}>{item.company}</h3>
              <p className={styles.role}>{item.title}</p>
              <p className={styles.description}>{item.description}</p>
              <TechnologyGrid technologies={item.technologies.slice(0, TECH_PREVIEW)} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
