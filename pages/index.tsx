import type { NextPage } from 'next'
import Head from 'next/head'
import { IndexPage } from '../src/pages'
import { getPageTitle } from '../src/utils'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Strona Główna')}</title>
        <meta name="description" content="Nocleg dla Ukrainy. Oferty pomocy. Znajdz pomoc lub powiedz nam jak możesz pomóc!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexPage />
    </>
  )
}

export default Home
