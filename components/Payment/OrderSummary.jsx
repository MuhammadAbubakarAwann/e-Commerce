// components/OrderSummary.js
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const OrderSummary = () => {
  return (
    <div className="ml-10 w-1/3 lg:h-1/2 p-6 mt-20 bg-white rounded-lg shadow-lg shadow-gray">
      <h2 className="text-2xl font-bold mb-6 ">Order Summary</h2>
      <div className="mb-4">
        <div className="flex justify-between mb-4">
          <span>Sub total</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Tax</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Shipping</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Discount %</span>
          <span>$0.00</span>
        </div>
      </div>
      <div className='h-0.5 w-full bg-gray-200 mt-4 mb-4 '> </div>
      <div className="flex justify-between font-bold text-lg mb-10">
        <span>Total</span>
        <span>$0.00</span>
      </div>
      <div className="">
        <button className="w-full bg-secondary text-white p-2 rounded hover:bg-primary">
          Complete Order
        </button>
        <button
          className="w-full text-primary p-2 text-sm mt-2 flex items-center justify-center"
        >
          <FaArrowLeft className="mr-2" /> Continue Shopping
        </button>
      </div>
    </div>
  );
};
export default OrderSummary;
