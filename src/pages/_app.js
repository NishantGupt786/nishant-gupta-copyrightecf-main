import '@/styles/globals.css'
import Head from 'next/head';
import { Fragment } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />  
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}
