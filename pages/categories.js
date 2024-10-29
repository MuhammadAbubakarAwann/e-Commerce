// pages/categories.jsx
import Head from 'next/head';
import Layout from '../components/Layout';
import "../src/app/globals.css";

const Categories = () => (
  <Layout>
    <Head>
      <title>categories - SmileShop</title>
    </Head>
    <main className="p-4">
      <h1 className="text-2xl">categories Us</h1>
      <p>This is the categories page.</p>
    </main>
  </Layout>
);

export default Categories;
