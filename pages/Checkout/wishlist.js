import React from 'react'
import Head from 'next/head';
import Sidebar from '../../components/User/Sidebar'
import "../../src/app/globals.css"
import Wishlist from '../../components/User/Wishlist'
import Layout from '../../components/Layout';
const reviews = () => {
  return (
  <Layout>
  <Head>
    <title>My Wishlist</title>
  </Head>
  <main className="min-h-screen lg:p-4">
  <div className=''>
    <Sidebar/>
    <div className='flex-grow'>
    <Wishlist/>
    </div>
</div>
  </main>
</Layout>
  )
}

export default reviews