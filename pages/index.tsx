import Head from 'next/head'
import DiscoverToday from '../src/componets/DiscoverToday'

export default function Home() {
  return (
    <div>
      <Head>
        <title>New Adventure</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>

      <main>
        <DiscoverToday />
      </main>
    </div>
  )
}
