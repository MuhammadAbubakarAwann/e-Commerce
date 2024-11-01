import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import OrderPlaced from '../../components/OrderPlaced/OrderPlaced'; // Adjust the path as per your file structure

// Example data
const orderId = '123456';
const orderDetails = [
  { name: 'Black Sneakers', image: '/images/shoeq.png', quantity: 2, price: 25 },
  { name: 'Black Sneakers', image: '/images/shoeq.png', quantity: 1, price: 30 },
];
const shippingDetails = {
  name: 'John Doe',
  address: '123 Main St',
  city: 'New York',
  state: 'NY',
  zip: '10001',
  country: 'USA',
  phone: '+1 123-456-7890',
};

const OrderPlacedPage = () => (

  <Layout>
    <Head>
      <title>OrderPlaced</title>
    </Head>
    <main className="p-4">
    <OrderPlaced orderId={orderId} orderDetails={orderDetails} shippingDetails={shippingDetails} />
    </main>
  </Layout>
);

export default OrderPlacedPage;
