// pages/index.jsx
import Head from 'next/head';
import Layout from '../components/Layout';
import "../src/app/globals.css";
import Card1 from '../components/main-section/cards/Card1';
import Card2 from '../components/main-section/cards/Card2';
import Card3 from '../components/main-section/cards/Card3';
import Features from '../components/features-newsLetter/Features';
import Newsletter from '../components/features-newsLetter/NewsLetter';
import End from '../components/Footer/End';
import Banner from '../components/main-section/banner/Banner';

const Home = () => (
  <Layout>
    <Head>
      <title>SmileShop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main >
      <section>
        <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-12">
          <Banner />
        </div>
        <div className="px-4 pt-0 pb-6 sm:px-6 sm:pb-8 md:px-12 md:pb-12 flex justify-center items-center flex-col md:flex-row gap-5 md:gap-10">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </section>

      <section>
        <h2 className="text-[40px] font-bold  text-center text-[#00AAC2] mb-8">
          Why You Choose Us!
        </h2>
        <Features />
        <div className='p-14'>
          <Newsletter />
        </div>
      </section>
      <footer>
        <End />
      </footer>
    </main>
  </Layout>
);

export default Home;
