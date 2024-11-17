import { WorkItem } from 'components/WorkList/WorkItem';

import { portfolioConfig } from '../../portfolioConfig';

import styles from './WorkList.module.scss';

export const WorkList = () => {
    return <div className={styles.workList}>
        {portfolioConfig.work.map((workItem, index) => {
            return <WorkItem key={index} workItem={workItem}/>;
        })}
    </div>;
}; 