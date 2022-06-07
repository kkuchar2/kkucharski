import i18next from 'i18next';
import Head from 'next/head';

const WithLanguageLayout = function ({ children }) {

    const { t } = i18next;

    return <>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <title>{t<string>('title', { ns: 'meta' })}</title>
        </Head>
        <main>
            {children}
        </main>
    </>;
};
export default WithLanguageLayout;
