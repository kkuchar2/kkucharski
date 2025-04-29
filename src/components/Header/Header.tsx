import { Social } from 'components/Social/Social';

import styles from './Header.module.scss';
import { WorkList } from "components/WorkList/WorkList";
 
export const Header = () => {
    return <div className={styles.header}>
        <div className={'flex flex-col items-center gap-[25px]'}>
            <div className={'flex flex-col items-center gap-[20px]'}>
                <h1 className={styles.name}>
                    {'Krzysztof Kucharski'}
                </h1>
                <div className={styles.title}>
                    {'Software Engineer'}
                </div>
            </div>
            <Social/>
        </div>
        <WorkList/>
    </div>;
};
