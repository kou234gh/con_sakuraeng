import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '@/components/Header/index'
import { Footer } from '@/components/Footer'

export default function App ( { Component, pageProps }: AppProps ) {
  return (
    // 以下はid="__next"のディブタグにまとめられる
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
