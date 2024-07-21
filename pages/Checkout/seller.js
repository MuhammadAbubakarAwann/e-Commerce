import React from 'react'
import Head from 'next/head';
import Layout from '../../components/Layout';
import Sidebar from '../../components/User/Sidebar'
import "../../src/app/globals.css"
const reviews = () => {
  return (
  <Layout>
  <Head>
    <title>Become a Seller</title>
  </Head>
  <main className="min-h-screen lg:p-4">
  <div className=''>
    <Sidebar/>
    <div className='flex-grow'>
    <p>Seller</p>
    </div>
</div>
  </main>
</Layout>
  )
}

export default reviews