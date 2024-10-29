import React from 'react'
import Head from 'next/head';
import Layout from '../../components/Layout';
import ProfilePage from '../../components/User/Profile'
import Sidebar from '../../components/User/Sidebar'
import "../../src/app/globals.css"


const profile = () => {
  return (

  <Layout>
  <Head>
    <title>My Profile</title>
  </Head>
  <main className="min-h-screen ">
  <div className='lg:p-4'>
    <Sidebar/>
    <div className='flex-grow'>
    <ProfilePage/>
    </div>
</div>  
  </main>
</Layout>
  )
}

export default profile