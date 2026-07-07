import { homePageJsonLd } from './JsonLd'

export const JsonLdScripts = () => {
  return (
    <>
      {homePageJsonLd.map((jsonLd, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      ))}
    </>
  )
}
