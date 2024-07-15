import React from 'react'
import Head from 'next/head';
import Layout from '../../components/Layout';
import AddressBook from '../../components/User/AddressBook'
import "../../src/app/globals.css"
import Sidebar from '../../components/User/Sidebar'


const address = () => {
  return (
    <Layout>
      <Head>
        <title>My Addresses</title>
      </Head>
      <main className="min-h-screen ">
  <div className='lg:p-4'>
    <Sidebar/>
    <div className='flex-grow'>
    <AddressBook/>
    </div>
</div>  
  </main>
    </Layout>
  );
};


export default address