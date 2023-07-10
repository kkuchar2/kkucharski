'use client';

import { ExternalLink } from 'components/svg/ExternalLink';
import { GithubLogo } from 'components/svg/GithubLogo';
import { TechnologyGrid } from 'components/TechnologyGrid/TechnologyGrid';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import { Project } from '../../../portfolioConfig.types';

import styles from './ProjectItem.module.scss';

export interface ProjectItemProps {
    project: Project;
}

const ProjectItem = (props: ProjectItemProps) => {

    const { project } = props;

    const { title, description, technologies, link, websiteLink } = project;

    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

    return <div className={[styles.projectItem, inView ? styles.visible : ''].join(' ')} ref={ref}>
        <div className={'flex flex-col gap-[30px]'}>
            <div className={'flex flex-col gap-4'}>
                <div className={'flex items-center gap-4 text-xl font-bold text-white'}>
                    <div>{title}</div>
                    {link && <Link href={link} title={link} target={'_blank'} rel={'noopener noreferrer'}>
                        <GithubLogo width={25} height={25}/>
                    </Link>}
                    {websiteLink && <Link
                        href={websiteLink}
                        title={websiteLink}
                        rel={'noopener noreferrer'}
                        target={'_blank'}
                        className={'ml-auto'}>
                        <ExternalLink/>
                    </Link>}
                </div>
                <div className={'text-md max-w-[500px] text-white/[60%]'}>
                    {description}
                </div>
            </div>
            <TechnologyGrid
                accentColor={'rgb(208,208,208)'}
                technologies={technologies}
                borderRadius={5}
            />
        </div>
    </div>;
};

export default ProjectItem;
