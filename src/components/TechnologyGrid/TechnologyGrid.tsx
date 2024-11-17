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
        gap = 10,
        accentColor = '#d5d5d5',
        borderRadius = 10
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