import { ReactNode } from 'react';

import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { seoConfig } from '../../next-seo.config';

import '../styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});


export const metadata: Metadata = {
    ...seoConfig.common
};

export const viewport: Viewport = {
    width: 'device-width',
    themeColor: '#151515',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return <html lang={'en'}>
        <body className={`${inter.variable} font-inter`}>
        <main>
            {children}
        </main>
        </body>
    </html>;
}