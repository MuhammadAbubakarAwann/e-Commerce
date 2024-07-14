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
import CardsWrapper from '../components/main-section/cards/CardsWrapper';

const Home = () => (
  <Layout>
    <Head>
      <title>SmileShop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main >
      <section>
        <div className="px-2 py-4 sm:px-3 sm:py-3 md:px-5 md:py-5">
          <Banner />
        </div>
        <div className="px-2 pt-0 pb-6 sm:px-6 sm:pb-8 md:px-5 md:pb-12 ">
          <CardsWrapper/>
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
