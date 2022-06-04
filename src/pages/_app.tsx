import '../i18n'
import { useEffect, useState } from 'react'
import i18next from 'i18next'

import { defaultLanguage, languages } from '../i18n'
import { useRouter } from 'next/router'
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background: #353535;
    font-family: poppins, sans-serif;
    font-weight: 500;
    font-style: normal;
  }
`;

const App = function ({ Component, pageProps }) {
  const router = useRouter()
  const { asPath, query } = router

  // Detect current language
  const slug = asPath.split('/')[1]
  const langSlug = languages.includes(slug) && slug
  const language = query.lang || langSlug || defaultLanguage

  const [clientLanguage, setClientLanguage] = useState(language)

  useEffect(() => {
    setClientLanguage(language)
  }, [language])

  // Don't trigger `i18next.changeLanguage()` on root folder, use `router` to redirect to the specific language
  if (asPath !== '/') {
    i18next.changeLanguage(clientLanguage as string).then(r => {})
  }

  return <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>;
}

export default App
