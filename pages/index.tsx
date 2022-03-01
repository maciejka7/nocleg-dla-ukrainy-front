import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { IndexPage } from '../src/pages'
import { getCategories } from '../src/services/categoriesService'
import { getPageTitle } from '../src/utils'


const Home: NextPage = () => {

  React.useEffect(() => {
    getCategories()
      .then(response => { console.log(response.data) })
      .catch(error => { console.log(error) })
  }, [])

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
