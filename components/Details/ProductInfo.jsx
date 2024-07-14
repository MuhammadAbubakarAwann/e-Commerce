// components/ProductInfo.js
"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import { FaHeart } from 'react-icons/fa';

import './ProductInfo.css'; // Import CSS file for custom styles

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="col-span-1 lg:col-span-1">
      <h2 className="text-2xl font-bold mb-2">Product Name</h2>
      <p className="text-lg text-gray-500 mb-4">Premium Running Shoes</p>
      <p className="text-2xl text-green-500 font-bold mb-4">$149.99</p>

      <div className="mb-4">
        <label className="block text-gray-700">Choose a Color</label>
        <div className="flex space-x-2 mt-2">
          <span
            onClick={() => handleColorSelect('red')}
            className={` w-6 h-6 rounded-full cursor-pointer ${selectedColor === 'red' ? 'bg-red-500 border-2 border-red-500' : 'bg-red-500'}`}
          ></span>
          <span
            onClick={() => handleColorSelect('green')}
            className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === 'green' ? 'bg-green-500 border-2 border-green-500' : 'bg-green-500'}`}
          ></span>
          <span
            onClick={() => handleColorSelect('blue')}
            className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === 'blue' ? 'bg-blue-500 border-2 border-blue-500' : 'bg-blue-500'}`}
          ></span>
          <span
            onClick={() => handleColorSelect('yellow')}
            className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === 'yellow' ? 'bg-yellow-500 border-2 border-yellow-500' : 'bg-yellow-500'}`}
          ></span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Size</label>
        <div className="grid grid-cols-6 gap-2 mt-2">
          <button
            onClick={() => handleSizeSelect('40')}
            className={`btn btn-outline ${selectedSize === '40' ? 'btn-active' : ''}`}
          >
            40
          </button>
          <button
            onClick={() => handleSizeSelect('41')}
            className={`btn btn-outline ${selectedSize === '41' ? 'btn-active' : ''}`}
          >
            41
          </button>
          <button
            onClick={() => handleSizeSelect('42')}
            className={`btn btn-outline ${selectedSize === '42' ? 'btn-active' : ''}`}
          >
            42
          </button>
          <button
            onClick={() => handleSizeSelect('43')}
            className={`btn btn-outline ${selectedSize === '43' ? 'btn-active' : ''}`}
          >
            43
          </button>
          <button
            onClick={() => handleSizeSelect('44')}
            className={`btn btn-outline ${selectedSize === '44' ? 'btn-active' : ''}`}
          >
            44
          </button>
          <button
            onClick={() => handleSizeSelect('45')}
            className={`btn btn-outline ${selectedSize === '45' ? 'btn-active' : ''}`}
          >
            45
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Quantity</label>
        <div className="flex items-center mt-2">
          <div className="flex items-center  bg-gray-100 rounded-2xl">
            <button onClick={decrementQuantity} className="quantity-button ml-3">
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="quantity-input  bg-gray-100 outline-none border-none text-center"
            />
            <button onClick={incrementQuantity} className="quantity-button">
              +
            </button>
          </div>
          <p className="text-xs ml-2 mt-2 sm:mt-0 mr-2">Only 20 items left in stock</p>
          <div className="flex items-center ml-auto mt-2 sm:mt-0 ">
            <span className="text-gray-400 lg:text-3xl sm:text-lg ">
              <FaHeart />
            </span>
            <p className="ml-2">Wishlist</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 mt-10">
        <button className="btn w-full sm:w-1/2 rounded-full bg-green-800 text-white">Buy Now</button>
        <button className="btn btn-outline w-full sm:w-1/2 rounded-full">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductInfo;
