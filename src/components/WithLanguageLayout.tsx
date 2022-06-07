import i18next from 'i18next';
import Head from 'next/head';
import {useSwipeable} from "react-swipeable";

import {useAppContext} from "../context/state";

const WithLanguageLayout = function ({ children }) {

    const { t } = i18next;

    const [navbarOpened, setNavbarOpened] = useAppContext();

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            setNavbarOpened(eventData.dir === 'Left');
        },
    });

    return <>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <title>{t<string>('title', { ns: 'meta' })}</title>
        </Head>
        <main {...handlers}>
            {children}
        </main>
    </>;
};
export default WithLanguageLayout;
