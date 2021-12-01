import React from 'react';
import Head from 'next/head'
import Home from '../pages/Home/index'

const App: React.FC = () => {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
          <Home/>
      </main>
    </>
  )
}

export default App
