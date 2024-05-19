import { ReactNode } from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import { seoConfig } from '../../next-seo.config';

import '../styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});


export const metadata: Metadata = {
    ...seoConfig.common
};

export default function RootLayout({ children }: { children: ReactNode }) {

    return <html lang={'en'}>
        <Head>
            <link rel={'apple-touch-icon'} sizes={'180x180'} href={'/images/apple-touch-icon.png'}/>
        </Head>
        <body className={`${inter.variable} font-sans`}>
            <main>
                {children}
            </main>
        </body>
    </html>;
}