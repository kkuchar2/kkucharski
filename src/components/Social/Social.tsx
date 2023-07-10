import { GitHub } from 'components/svg/GitHub';
import { LinkedIn } from 'components/svg/LinkedIn';
import Image from 'next/image';
import Link from 'next/link';

import githubProfileImg from '/public/images/github_icon.png';
import profileImg from '/public/images/profile.png';

import styles from './Social.module.scss';

export const Social = () => {
    return <div className={styles.socialGroup}>
        <Link href={'https://www.linkedin.com/in/kkuchar/'}
            target={'_blank'}
            rel={'noopener noreferrer'}
            className={styles.link}>
            <div className={styles.image}>
                <Image
                    alt={'github'}
                    src={profileImg}
                    placeholder={'blur'}
                    quality={100}
                    fill
                    sizes={'100px'}
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div className={styles.name}>
                <LinkedIn width={70} height={30}/>
            </div>
        </Link>
        <Link href={'https://github.com/kkuchar2'}
            target={'_blank'}
            rel={'noopener noreferrer'}
            className={styles.link}>
            <div className={styles.image}>
                <Image
                    alt={'github'}
                    src={githubProfileImg}
                    placeholder={'blur'}
                    quality={100}
                    fill
                    sizes={'100px'}
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div className={styles.name}>
                <GitHub width={50} height={30}/>
            </div>
        </Link>
    </div>;
};