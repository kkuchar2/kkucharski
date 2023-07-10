import { socialProfileJsonLd, webPageJsonLd } from 'components/SEO/JsonLd';
import { Metadata } from 'next';

export interface JsonLd {
    __html: string;
}

interface PageSeoConfig {
    jsonLd?: JsonLd[];
    meta: Metadata;
}

interface PagesSeoConfig {
    [page: string]: PageSeoConfig;
}

interface SeoConfig {
    common: Metadata;
    pages: PagesSeoConfig;
}

interface OgImage {
    url: string;
    width?: number;
    height?: number;
}

interface TwitterImage {
    url: string;
}

interface CustomMeta {
    title: string;
    description: string;
    url: string
    ogImages?: OgImage[];
    tiwtterImages?: TwitterImage[];
    locale?: string;
    pageType?: string;
    alternates?: {
        canonical: string;
    }
}

const metadataOf = (meta: CustomMeta): Metadata => {
    return {
        title: meta.title,
        description: meta.description,
        alternates: meta.alternates,
        openGraph: {
            url: meta.url,
            siteName: meta.title,
            title: meta.title,
            description: meta.description,
            images: meta.ogImages,
            locale: meta.locale || 'en_US',
        },
        // twitter: {
        //     card: 'summary_large_image',
        //     title: meta.title,
        //     description: meta.description,
        //     images: meta.tiwtterImages,
        // }
    };
};

const SITE_URL = process.env.SITE_URL as string;
const HOME_TITLE = 'Krzysztof Kucharski - Software Engineer';
const environment = process.env.ENVIRONMENT as string || 'development';

let siteUrlValid: boolean;
let siteUrl: URL;
try {
    siteUrl = new URL(SITE_URL);
    siteUrlValid = true;
}
catch (e) {
    console.error('Invalid SITE_URL: ' + SITE_URL, " Page metadata won't be generated. Please set a valid SITE_URL environment variable.");
    siteUrlValid = false;
    throw e;
}

const commonMetadata = {
    title: HOME_TITLE,
    metadataBase: siteUrlValid ? siteUrl : null,
    alternates: {
        canonical: '/'
    },
    robots: {
        index: environment === 'production',
        follow: environment === 'production',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        minimumScale: 1,
        maximumScale: 5,
    },
    manifest: '/manifest.json'
};

const pageMetadata = {
    'home': {
        meta: metadataOf({
            url: SITE_URL,
            title: HOME_TITLE,
            description: "I'm Krzysztof Kucharski, a software engineer",
            ogImages: [
                {
                    url: 'images/seo/og-image.png'
                }
            ]
        }),
        jsonLd: [
            socialProfileJsonLd({
                name: 'Krzysztof Kucharski',
                url: SITE_URL,
                linkedinProfile: 'kkuchar',
                githubProfile: 'kkuchar2',
            }),
            webPageJsonLd({
                name: HOME_TITLE,
                description: "I'm Krzysztof Kucharski, a software engineer",
                url: SITE_URL,
                authorName: 'Krzysztof Kucharski',
            })
        ]
    }
};

const seoConfig: SeoConfig = {
    common: commonMetadata,
    pages: pageMetadata
};

const getPageMetadata = (page: string): Metadata => {
    return seoConfig.pages[page].meta;
};

export { seoConfig, getPageMetadata };