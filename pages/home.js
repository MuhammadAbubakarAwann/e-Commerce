// pages/index.jsx
import Head from 'next/head';
import Layout from '../components/Layout';
import "../src/app/globals.css";
import Card1 from '../components/cards/Card1';
import Card2 from '../components/cards/Card2';
import Card3 from '../components/cards/Card3';

const Home = () => (
  <Layout>
    <Head>
      <title>SmileShop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main >
      <div className="p-12 flex justify-center items-center flex-col md:flex-row gap-10 ">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </main>
  </Layout>
);

export default Home;
