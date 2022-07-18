import Document, {Head, Html, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from "styled-components";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;
        const sheet = new ServerStyleSheet();

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: [
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>,
            ],
        };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json"/>
                    <link rel="apple-touch-icon" href="/images/pwa/icon-256x256.png"></link>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"/>
                    <meta name="theme-color" content="#fff"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    };
}

export default MyDocument;