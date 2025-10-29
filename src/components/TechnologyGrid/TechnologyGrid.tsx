import { Technologies } from '../../portfolioConfig.types';

import styles from './TechnologyGrid.module.scss';

type TechnologyGridProps = {
    technologies: Technologies[];
    gap?: number;
    accentColor?: string;
    borderRadius?: number;
}

export const TechnologyGrid = (props: TechnologyGridProps) => {

    const {
        technologies,
        gap = 5,
        accentColor = 'rgba(213,213,213,0.9)',
        borderRadius = 5
    } = props;

    return <div style={{ gridGap: gap }} className={styles.technologyGrid}>
        {technologies.map((technology, index) => {
            return <div key={index}
                style={{
                    color: accentColor,
                    borderRadius: borderRadius
                }}
                className={styles.technologyItem}>
                {technology}
            </div>;
        })}
    </div>;
};