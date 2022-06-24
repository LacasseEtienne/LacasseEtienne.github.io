import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/header'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Étienne Lacasse</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="Étienne Etienne Lacasse étienne etienne lacasse enseignant" />
        <meta name="author" content="Étienne Lacasse" />
        <meta name="google-site-verification" content="dMMR6ges2KxcGT8IjH8JtmNgbcsmWOdxlndi5_4D76k" />
      </Head>
      <div className='h-screen w-screen flex flex-col'>
        <Header />
        <main className='flex-1'>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
