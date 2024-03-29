// import '../styles/globals.css'
import React, { useEffect, useState } from 'react'
import { Layout } from '../components'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
