import ProjectItem from 'components/Projects/ProjectItem/ProjectItem';

import { portfolioConfig } from '../../portfolioConfig';

import styles from './Projects.module.scss';

export const ProjectsListView = () => {

    return <div className={'w-full max-w-[2000px] px-[20px] xl:px-[150px]'}>
        <div className={styles.title}>
            {'Projects'}
        </div>
        <div className={'mt-[80px] grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:flex-row 2xl:grid-cols-3'}>
            {portfolioConfig.projects.map((project, index) => <ProjectItem project={project} key={index}/>)}
        </div>
    </div>; 
};
