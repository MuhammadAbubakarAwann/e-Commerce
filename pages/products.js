import Head from 'next/head'; // Import Head from next/head
import "../src/app/globals.css";
import Layout from '../components/Layout';
import Sidebar from "../components/products/Sidebar";
import Selling from '../components/products/Selling';

const Products = () => {
  return (
    <Layout>
      <main>
        <section className="flex">
          <div className="flex-grow p-4">
            <Sidebar />
          </div>
          <div><Selling/></div>
        </section>
      </main>
    </Layout>
  );
};

export default Products;