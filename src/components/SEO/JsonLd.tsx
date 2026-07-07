import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../../config/site'

export type JsonLdProps = {
  url: string
  name: string
  description: string
  authorName: string
}

export type SocialProfileJsonLdProps = {
  name: string
  url: string
  linkedinProfile?: string
  githubProfile?: string
}

export const webPageJsonLd = (props: JsonLdProps) => {
  const { url, name, authorName, description } = props

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url,
    name,
    description: description.replace(/\n/g, ' ').replace(/\s\s+/g, ' '),
    author: {
      '@type': 'Person',
      name: authorName,
    },
  }
}

export const socialProfileJsonLd = (params: SocialProfileJsonLdProps) => {
  const { name, url, linkedinProfile, githubProfile } = params

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url,
    sameAs: [
      linkedinProfile ? `https://www.linkedin.com/in/${linkedinProfile}` : null,
      githubProfile ? `https://github.com/${githubProfile}` : null,
    ].filter(Boolean),
  }
}

export const homePageJsonLd = [
  socialProfileJsonLd({
    name: 'Krzysztof Kucharski',
    url: SITE_URL,
    linkedinProfile: 'kkuchar',
    githubProfile: 'kkuchar2',
  }),
  webPageJsonLd({
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    authorName: 'Krzysztof Kucharski',
  }),
]
