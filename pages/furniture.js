// pages/Furniture.jsx
import Head from 'next/head';
import Layout from '../components/Layout';
import "../src/app/globals.css";

const Furniture = () => (
  <Layout>
    <Head>
      <title>Furniture - SmileShop</title>
    </Head>
    <main className="p-4">
      <h1 className="text-2xl">Furniture Us</h1>
      <p>This is the Furniture page.</p>
    </main>
  </Layout>
);

export default Furniture;
