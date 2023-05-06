import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '@/components/Header/index'
import { Footer } from '@/components/Footer'
import Script from 'next/script'



export default function App ( { Component, pageProps }: AppProps ) {
  return (
    // 以下はid="__next"のディブタグにまとめられる
    <>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-21V9JN6CTS'
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${ process.env.GA4_MEASUREMENT_ID });
        `}
      </Script>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
