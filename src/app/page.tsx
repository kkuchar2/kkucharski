import { ProjectsListView } from 'components/Projects/ProjectsListView';
import { SEO } from 'components/SEO/SEO';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from 'styles/Index.module.scss';

import { getPageMetadata } from '../../next-seo.config';
import { Header } from "components/Header/Header";
 
export const metadata: Metadata = { ...getPageMetadata('home') };

export default function Index() {
    return <div className={styles.indexPage}>
        <SEO seoKey={'home'}/>
        <div className={'mt-[150px] grid w-full place-items-center pb-[150px]'}>
            <div className={'w-full max-w-[2000px] xl:px-[150px]'}>
                <Header/>
                <div className={styles.viewMyResume}>
                        <Link
                            prefetch={false}
                            className={styles.viewMyResumeLink}
                            href={'doc/resume_Krzysztof_Kucharski.pdf'}
                            target={'blank'}
                        >
                            {'View my Resume'}
                        </Link>
                </div>
            </div>
            <ProjectsListView/>
        </div>
    </div>;
}