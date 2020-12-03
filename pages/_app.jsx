import '../styles/global.css'
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = 'en';
  },[])

  return <Component {...pageProps} />
}

export default MyApp
