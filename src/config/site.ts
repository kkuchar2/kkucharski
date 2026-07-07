export const SITE_URL = (process.env.SITE_URL ?? 'https://kkucharski.com').replace(/\/$/, '')

export const SITE_NAME = 'Krzysztof Kucharski - Software Engineer'

export const SITE_DESCRIPTION = "I'm Krzysztof Kucharski, a software engineer"

export const isProduction = (process.env.ENVIRONMENT ?? process.env.NODE_ENV) === 'production'
