import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head >
                <link rel="shortcut icon" href="/icons/favicon_io/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon_io/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon_io/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon_io/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
