import React from 'react'
import Head from 'next/head';
import Layout from '../../components/Layout';
import Sidebar from '../../components/User/Sidebar'
import Orders  from '../../components/User/Orders'
import "../../src/app/globals.css"
const reviews = () => {
  return (


<Layout>
<Head>
  <title>My Orders</title>
</Head>
<main className="min-h-screen ">
<div className='lg:p-4'>
    <Sidebar/>
    <div className='flex-grow'>
    <Orders/>
    </div>
</div>
</main>
</Layout>
  )
}

export default reviews