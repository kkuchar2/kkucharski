import { Header } from 'components/Header/Header';
import { ProjectsListView } from 'components/Projects/ProjectsListView';
import { SEO } from 'components/SEO/SEO';
import { Arrow } from 'components/svg/Arrow';
import { WorkList } from 'components/WorkList/WorkList';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from 'styles/Index.module.scss';

import { getPageMetadata } from '../../next-seo.config';

export const metadata: Metadata = { ...getPageMetadata('home') };

export default function Index() {
    return <div className={styles.indexPage}>
        <SEO seoKey={'home'}/>
        <div className={styles.topSection}>
            <div className={'relative flex h-full w-full max-w-[3000px] flex-col xl:flex-row'}>
                <Header/>
                <div className={'mt-[100px] grid w-full place-items-center p-[20px] xl:mt-0'}>
                    <div>
                        <WorkList/>
                        <div className={styles.viewMyResume}>
                            <Link
                                className={styles.viewMyResumeLink}
                                href={'doc/resume_Krzysztof_Kucharski.pdf'}
                                target={'blank'}
                            >
                                {'View my Resume'}
                                <Arrow/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={'mt-[150px] grid w-full max-w-[3000px] place-items-center p-[20px] pb-[150px] xl:mt-0'}>
            <ProjectsListView/>
        </div>
    </div>;
}