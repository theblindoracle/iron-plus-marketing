import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="All the gym calculations you need. RPE Calculator, Kilogram and Pound Converter, and Warm Up Calculator all in one." />
        <link rel="canonical" href="https://ironplus.dev" />
        <meta property="og:url" content="https://ironplus.dev" />
        <meta property="og:title" content="Iron Plus - Tools for Powerlifters" />
        <meta property="og:description" content="All the gym calculations you need. RPE Calculator, Kilogram and Pound Converter, and Warm Up Calculator all in one." />
        <meta property="og:image" content="https://ironplus.dev/IronPlusLogo2-1.png" />
        <meta property="og:image:alt" content="Iron Plus Logo" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="author" content="Travis Napier" />
        <link rel="shortcut icon" href="static/favicon.svg" />
        <link rel="icon" href="static/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap" rel="stylesheet" />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}