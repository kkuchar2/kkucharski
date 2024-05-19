import { WorkItem } from 'components/WorkList/WorkItem';

import { portfolioConfig } from '../../portfolioConfig';

export const WorkList = () => {
    return <div className={'gap flex flex-col gap-[50px] px-[40px] xl:px-0'}>
        {portfolioConfig.work.map((workItem, index) => {
            return <WorkItem key={index} workItem={workItem}/>;
        })}
    </div>;
}; 