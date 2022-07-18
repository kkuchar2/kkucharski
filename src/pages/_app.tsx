import '../i18n';
import {useEffect, useState} from 'react';

import i18next from 'i18next';
import {DefaultSeo} from "next-seo";
import {useRouter} from 'next/router';
import {createGlobalStyle} from "styled-components";

import SEO from '../../next-seo.config';
import {AppWrapper} from "../context/state";
import {defaultLanguage, languages} from '../i18n';
import "../styles/globals.css";

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background: #353535;
    background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 0);
    background-size: 25px 25px;
    background-position: -19px -19px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-style: normal;
  }
`;

const App = function ({ Component, pageProps }) {
    const router = useRouter();
    const { asPath, query } = router;

    // Detect current language
    const slug = asPath.split('/')[1];
    const langSlug = languages.includes(slug) && slug;
    const language = query.lang || langSlug || defaultLanguage;

    const [clientLanguage, setClientLanguage] = useState(language);

    useEffect(() => {
        setClientLanguage(language);
    }, [language]);

    // Don't trigger `i18next.changeLanguage()` on root folder, use `router` to redirect to the specific language
    if (asPath !== '/') {
        i18next.changeLanguage(clientLanguage as string).then(r => {
        });
    }

    return <AppWrapper>
        <GlobalStyles/>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
    </AppWrapper>;
};

export default App;
