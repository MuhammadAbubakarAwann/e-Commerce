// pages/Seller.jsx
import Head from 'next/head';
import Layout from '../components/Layout';
import "../src/app/globals.css";

const Seller = () => (
  <Layout>
    <Head>
      <title>Seller - SmileShop</title>
    </Head>
    <main className="p-4">
      <h1 className="text-2xl">Seller Us</h1>
      <p>This is the Seller page.</p>
    </main>
  </Layout>
);

export default Seller;
