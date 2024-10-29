// pages/Clothing.jsx
import Head from 'next/head';
import Layout from '../components/Layout';
import "../src/app/globals.css";

const Clothing = () => (
  <Layout>
    <Head>
      <title>Clothing - SmileShop</title>
    </Head>
    <main className="p-4">
      <h1 className="text-2xl">Clothing Us</h1>
      <p>This is the Clothing page.</p>
    </main>
  </Layout>
);

export default Clothing;
