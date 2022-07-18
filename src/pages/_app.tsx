import '../i18n';
import {useEffect, useState} from 'react';

import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import i18next from 'i18next';
import {DefaultSeo} from "next-seo";
import {useRouter} from 'next/router';

import SEO from '../../next-seo.config';
import {AppWrapper} from "../context/state";
import {defaultLanguage, languages} from '../i18n';
import "../styles/globals.css";

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    }
};

const theme = extendTheme({
    colors, styles: {
        global: () => ({
            body: {
                bg: "#353535 radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 0) -19px -19px",
                bgSize: "25px 25px",
            },
        }),
    },
});

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
        <DefaultSeo {...SEO} />
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    </AppWrapper>;
};

export default App;
