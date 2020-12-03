import Head from 'next/head'
import DiscoverToday from '../componets/DiscoverToday'
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>New Adventure</title>
        <link rel="icon" href="/favicon.ico" />
        <link defer rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      </Head>

      <main>
        <DiscoverToday />
      </main>
    </div>
  )
}
