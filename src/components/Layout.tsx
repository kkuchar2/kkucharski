import Head from 'next/head'
import i18next from 'i18next'

const Layout = function ({ children }) {

    const { t } = i18next;

    return <>
        <Head>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="description" content="Learn how to build a personal website using Next.js"/>
            <meta name="og:title" content={t('title', { ns: 'meta' })}/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <title>{t<string>('title', { ns: 'meta' })}</title>
        </Head>
        <main>
            {children}
        </main>
    </>;
}
export default Layout
