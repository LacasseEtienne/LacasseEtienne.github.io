import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/header'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Étienne Lacasse</title>
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
