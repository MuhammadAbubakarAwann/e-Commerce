import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const OrderSummary = () => {
  return (
    <div className="mx-auto w-11/12 sm:w-96 lg:h-1/2 p-4 sm:p-6 lg:mt-44 sm:mt-10 bg-white rounded-lg shadow-lg shadow-gray">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Order Summary</h2>
      <div className="mb-4">
        <div className="flex justify-between mb-2 sm:mb-4">
          <span>Sub total</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between mb-2 sm:mb-4">
          <span>Tax</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between mb-2 sm:mb-4">
          <span>Shipping</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between mb-2 sm:mb-4">
          <span>Discount %</span>
          <span>$0.00</span>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-200 my-4"></div>
      <div className="flex justify-between font-bold text-lg mb-6 sm:mb-10">
        <span>Total</span>
        <span>$0.00</span>
      </div>
      <div>
        <button className="w-full bg-secondary text-white p-2 rounded hover:bg-primary">
          Confirm Order
        </button>
        <button className="w-full text-primary p-2 text-sm mt-2 flex items-center justify-center">
          <FaArrowLeft className="mr-2" /> Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
