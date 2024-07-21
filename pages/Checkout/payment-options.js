import React from 'react'
import Head from 'next/head';
import Layout from '../../components/Layout';
import PaymentOptions from '../../components/User/PaymentOptions'
import "../../src/app/globals.css"
import Sidebar from '../../components/User/Sidebar'

const payment = () => {
  return (

<Layout>
<Head>
  <title>PaymentOptions</title>
</Head>
<main className="min-h-screen">
<div className='lg:p-4'>
    <Sidebar/>
    <div className='flex-grow lg:mt-10'>
    <PaymentOptions/>
    </div>
</div>
</main>
</Layout>
  )
}

export default payment