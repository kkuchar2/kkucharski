import {Work} from '../../portfolioConfig.types';

import styles from './WorkItem.module.scss';

type WorkItemProps = {
    workItem: Work;
}

export const WorkItem = (props: WorkItemProps) => {

    const {startDate, endDate, company, title, description, technologies} = props.workItem;

    return <div className={styles.workItem}>
        <div className={'flex flex-col justify-center gap-3'}>
            <div className={'flex flex-col'}>
                <div className={'flex flex-wrap items-center gap-3 text-gray-500'}>
                    <div className={styles.date}>
                        <span>{startDate} - </span>
                        <span className={endDate === 'PRESENT' ? styles.present : ''}>
      {endDate}
    </span>
                    </div>
                    <div className={styles.company}>
                        {company}
                        {endDate === 'PRESENT' && <span className={styles.activeDot} />}
                    </div>
                </div>
                <div className={'text-xl text-white'}>
                    {title}
                </div>
            </div>
            <div className={'text-md text-white/[60%]'}>
                {description}
            </div>

        </div>
    </div>;
};