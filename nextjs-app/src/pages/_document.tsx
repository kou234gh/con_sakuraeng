// import { Footer } from '@/components/Footer'
// import Header from '@/components/Header'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

const GTM_ID = process.env.GTM_ID;

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
      {GTM_ID && (
            <Script
              id="gtag-base"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer', '${GTM_ID}');
                    `,
              }}
            />
          )}
      </Head>
      <body>
        {/* <Header/> */}
        <noscript>
            <iframe
              title="Tag Manager"
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        <Main />
        {/* <Footer/> */}
        <NextScript />
      </body>
    </Html>
  )
}
