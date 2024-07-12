// pages/Electronics.jsx
import Head from 'next/head';
import Layout from '../components/Layout';
import "../src/app/globals.css";

const Electronics = () => (
  <Layout>
    <Head>
      <title>Electronics - SmileShop</title>
    </Head>
    <main className="p-4">
      <h1 className="text-2xl">Electronics Us</h1>
      <p>This is the Electronics page.</p>
    </main>
  </Layout>
);

export default Electronics;
