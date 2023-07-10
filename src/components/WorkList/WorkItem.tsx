import { TechnologyGrid } from 'components/TechnologyGrid/TechnologyGrid';

import { Work } from '../../portfolioConfig.types';

import styles from './WorkItem.module.scss';

interface WorkItemProps {
    workItem: Work;
}

export const WorkItem = (props: WorkItemProps) => {

    const { startDate, endDate, company, title, description, technologies } = props.workItem;

    return <div className={styles.workItem}>
        <div className={'flex flex-col justify-center gap-[36px]'}>
            <div className={'flex flex-col gap-[15px]'}>
                <div className={'flex h-[50px] flex-wrap items-center gap-3 text-gray-500'}>
                    <div className={styles.date}>
                        {`${startDate} - ${endDate}`}
                    </div>
                    <div className={styles.company}>
                        {company}
                    </div>
                </div>
                <div className={'text-xl text-white'}>
                    {title}
                </div>
            </div>
            <div className={'text-md text-white/[60%]'}>
                {description}
            </div>
            <TechnologyGrid technologies={technologies}/>
        </div>
    </div>;
};