import { Technologies } from '../../portfolioConfig.types';

import styles from './TechnologyGrid.module.scss';

interface TechnologyGridProps {
    technologies: Technologies[];
    gap?: number;
    accentColor?: string;
    borderRadius?: number;
}

export const TechnologyGrid = (props: TechnologyGridProps) => {

    const {
        technologies,
        gap = 10,
        accentColor = '#00BA8D',
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