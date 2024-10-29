// components/SellerInfo.js
import React from 'react';
import { FaStoreAlt, FaMedal, FaBoxOpen, FaTruck } from 'react-icons/fa'; // Import icons from react-icons library

const SellerInfo = () => {
  return (
    <div className="col-span-1 ml-6 lg:ml-10 bg-gray-100 p-4 rounded-lg flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center mb-4">
          <FaStoreAlt className="text-3xl text-gray-500 mr-3" />
          <h3 className="text-xl font-bold mb-0">Sold by Company Name</h3>
        </div>
        <p className="flex items-center mb-2">
          <span className="text-white bg-green-800 rounded-md p-2 mt-0 text-xs ml-10"> 4.8 ★</span>
        </p>
        <p className="ml-10 text-sm">80% positive Seller Rating</p>
        <p className="flex items-center text-lg mb-4 mt-8">
          <FaMedal className="text-xl text-gray-500 mr-3" />
          <strong>Official Warranty:</strong> Yes
        </p>
        <p className="flex items-center text-lg mb-8 mt-8 ">
          <FaBoxOpen className="text-xl text-gray-500 mr-3" />
          <strong>Free Return:</strong> Yes
        </p>
        <p className="flex items-center texl-lg mb-2 mt-8">
          <FaTruck className="text-xl text-gray-500 mr-3" />
          <strong >Country Wide Shipping:</strong> Yes
        </p>
      </div>
      <a href="#" className="text-green-800 font-bold block text-center mt-4">Visit Store</a>
    </div>
  );
};

export default SellerInfo;
