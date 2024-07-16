// pages/index.jsx
import Head from 'next/head';
import Layout from '../components/Layout';
import "../src/app/globals.css";
import Features from '../components/features-newsLetter/Features';
import Newsletter from '../components/features-newsLetter/NewsLetter';
import End from '../components/Footer/End';
import Banner from '../components/main-section/banner/Banner';
import CardsWrapper from '../components/main-section/cards/CardsWrapper';
import CategoriesSlider from '../components/main-section/top-categories-slider/CategoriesSlider';
import NewArrivals from '../components/arrivals/Arrivals';
import Selling from '../components/selling/Selling';

const Home = () => (
  <Layout>
    <Head>
      <title>SmileShop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main >
      <section >
        <div className="px-2 py-4 sm:px-3 sm:py-3 md:px-5 md:py-5 ">
          <Banner />
        </div>
        <div className="px-2 pt-0 pb-6 sm:px-6 sm:pb-8 md:px-5 md:pb-12 ">
          <CardsWrapper />
        </div>

        <div ><CategoriesSlider /></div>
      </section>
      <section className='bg-[#00abc23a]'>

        <div><NewArrivals /></div>
      </section>

      <section>
        <h2 className="text-4xl md:text-5xl font-bold  text-center text-[#00AAC2] p-6 mt-5">
          Our Best Selling Items
        </h2>
        <div className='flex justify-center items-center'><Selling /></div>
      </section>

      <section>
        <h2 className="text-4xl md:text-5xl font-bold  text-center text-[#00AAC2] p-6 mt-5">
          Why You Choose Us!
        </h2>
        <Features />
        <div className='p-4 md:p-8 lg:p-14'>
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
