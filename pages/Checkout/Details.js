// pages/product/[id].js
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import ProductImageGallery from '../../components/Details/ProductImageGallery';
import ProductInfo from '../../components/Details/ProductInfo';
import SellerInfo from '../../components/Details/SellerInfo';
import Tabs from '../../components/Details/Tabs';
import "../../src/app/globals.css"

const ProductDetails = () => {
  return (

  <Layout>
  <Head>
    <title>Furniture - SmileShop</title>
  </Head>
  <main className="">
  <div>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white shadow-md rounded-lg p-6">
        <ProductImageGallery />
        <ProductInfo />
        <SellerInfo />
      </div>

      {/* Additional Sections */}
      <div className="mt-8">
        <Tabs />
      </div>
      </div>
      <div>

    </div>
    </div>
  </main>
</Layout>
    
    
  );
};

export default ProductDetails;
