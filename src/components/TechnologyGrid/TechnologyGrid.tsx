import { Technologies } from '../../portfolioConfig.types'

import styles from './TechnologyGrid.module.scss'

type TechnologyGridProps = {
  technologies: Technologies[]
}

export const TechnologyGrid = ({ technologies }: TechnologyGridProps) => {
  return (
    <ul className={styles.grid} aria-label="Technologies">
      {technologies.map((technology) => (
        <li key={technology} className={styles.item}>
          {technology}
        </li>
      ))}
    </ul>
  )
}
