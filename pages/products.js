import Head from 'next/head';
import Layout from '../components/Layout';
import "../src/app/globals.css";
import Sidebar from '../components/products/Sidebar';
import Selling from '../components/products/Selling';



const Product = () => {
  return (
    <Layout>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="Product Page" />
      </Head>
      <main>
        <section>
          <div className='flex'>
            <Sidebar />
            <Selling/>
          </div>
        </section>
        
      </main>
    </Layout>
  );
};

export default Product;
