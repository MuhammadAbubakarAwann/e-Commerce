// pages/index.jsx
import Head from 'next/head';
import Layout from '../components/Layout';
import "../src/app/globals.css";
import Card1 from '../components/cards/Card1';
import Card2 from '../components/cards/Card2';
import Card3 from '../components/cards/Card3';
import Shop from '../components/shop/shop';


const Home = () => (
  <Layout>
    <Head>
      <title>SmileShop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main >
    <section>
    <div className=" mt-10 px-2 pt-0 pb-6 sm:px-6 sm:pb-8 md:px-5 md:pb-12 flex justify-center items-center flex-col md:flex-row gap-4 md:gap-6">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card3 />
        </div>

      <div className='mt-2'><Shop/></div>
    </section>
     

    </main>
  </Layout>
);

export default Home;

