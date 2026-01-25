import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="id">
            <Head>
                {/* PWA Meta Tags */}
                <meta name="application-name" content="My Portfolio" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="MyPortfolio" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-TileColor" content="#2563eb" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#2563eb" />

                {/* PWA Manifest */}
                <link rel="manifest" href="/manifest.json" />

                {/* Icons */}
                <link rel="icon" href="/icons/icon-192x192.png" />
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png" />
                <link rel="apple-touch-icon" sizes="128x128" href="/icons/icon-128x128.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
                <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png" />
                <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png" />

                {/* Splash Screen for iOS */}
                <meta name="apple-mobile-web-app-capable" content="yes" />

                {/* Fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
