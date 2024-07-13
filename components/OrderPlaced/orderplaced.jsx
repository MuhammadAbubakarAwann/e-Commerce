import React from 'react';
import Image from 'next/image';
import OrderDetails from './OrderDetails';
import ShippingDetails from './ShippingDetails';
import Link from 'next/link'; // Import Link from next/link for navigation
import '../../src/app/globals.css';

const OrderPlaced = ({ orderId, orderDetails, shippingDetails }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6">
    <Image src="/images/orderplaced.gif" alt="Order Placed" width={256} height={256} className="mb-8" unoptimized />
    <h1 className="text-3xl font-bold text-green-500 mb-4">Order Has Been Placed!</h1>
    <p className="text-xl mb-2">
      <strong>Order# {orderId}</strong>
    </p>
    <p className="text-lg mb-4">Thank you for your order! Your items will be shipped soon.</p>
    <div className="mt-8">
      <Link href="/" passHref>
        <button className="bg-primary hover:bg-secondary hover:text-primary text-white font-bold py-2 px-4 rounded">
          Continue Shopping
        </button>
      </Link>
    </div>
    <div className="container h-0.5 w-full bg-gray-100 mb-4 mt-10"></div>
    <div className="container flex w-full mt-8 bg-white shadow-lg p-6 rounded-lg">
      <OrderDetails orderDetails={orderDetails} />
      <ShippingDetails shippingDetails={shippingDetails} />
    </div>

  </div>
);

export default OrderPlaced;
