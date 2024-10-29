// components/ReviewSection.js
import React from 'react';
import { FaStar, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';;

const ReviewSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      
      <h3 className="text-xl font-bold mb-4">Rating and Reviews</h3>
      <div className='flex w-full'>
      {/* Overall Rating */}
      <div className="mt-10">
        <span className="text-4xl font-bold">4.0 out of 5.0</span>
        <div className="">
          <div className="flex items-center">
            <span className="text-yellow-500">★  ★  ★  ★  ☆</span>
          </div>
          <span className=" text-gray-700">1,706 global ratings</span>
        </div>
      </div>
      <div className='ml-10 h-auto w-0.5 bg-gray-300'>
      </div>
      {/* Individual Ratings */}
      <div className='w-64 ml-8'>
        <div className=" mb-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★★★★★</span>
            <span className="ml-2">555</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="ml-2">88</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★★★☆☆</span>
            <span className="ml-2">24</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★★☆☆☆</span>
            <span className="ml-2">11</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '5%' }}></div>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★☆☆☆☆</span>
            <span className="ml-2">7</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '3%' }}></div>
          </div>
        </div>
      </div>
      </div>
      <div className='h-0.5 w-full bg-gray-200 mt-10 '> </div>

      <div className='w-full mt-4 mb-6 flex justify-end items-center'>
      <p className='mr-2'>Sort by:</p>
      <select className='bg-gray-100 ml-2 rounded px-2 py-1'>
        <option value='newest'>Newest</option>
        <option value='relevance'>Relevance</option>
        <option value='lowest'>Lowest</option>
      </select>
    </div>

      {/* Customer Reviews */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="flex items-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span className="ml-2">Muhammad</span>
          </div>
          <p className="text-gray-500 text-sm">4 months ago</p>
        </div>
        <p>Its value for money in this price. Quality is very good.</p>
        <div className="flex justify-end mb-4">
          <FaThumbsUp className="text-gray-400 mr-4 cursor-pointer" />
          <FaThumbsDown className="text-gray-400 cursor-pointer" />
        </div>
        <div className="bg-gray-100 p-2 rounded-lg text-gray-700 mt-2">
          <p className="text-red-800">Seller Response:</p>
          <p className="text-gray-700">We're glad you liked them! Thank you.</p>
        </div>
      </div>
        <div className='h-0.5 w-full bg-gray-200 mt-4 mb-4 '> </div>
        {/* Review 2 */}
        <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="flex items-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span className="ml-2">Muhammad</span>
          </div>
          <p className="text-gray-500 text-sm">4 months ago</p>
        </div>
        <p>Its value for money in this price. Quality is very good.</p>
        <div className="flex justify-end mb-4">
          <FaThumbsUp className="text-gray-400 mr-4 cursor-pointer" />
          <FaThumbsDown className="text-gray-400 cursor-pointer" />
        </div>
        <div className="bg-gray-100 p-2 rounded-lg text-gray-700 mt-2">
          <p className="text-red-800">Seller Response</p>
          <p className="text-gray-700">We're glad you liked them! Thank you.</p>
        </div>
      </div>
        <div className='h-0.5 w-full bg-gray-200 mt-4 mb-4 '> </div>
        {/* Review 3 */}
        <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="flex items-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span className="ml-2">Muhammad</span>
          </div>
          <p className="text-gray-500 text-sm">4 months ago</p>
        </div>
        <p>Its value for money in this price. Quality is very good.</p>
        <div className="flex justify-end mb-4">
          <FaThumbsUp className="text-gray-400 mr-4 cursor-pointer" />
          <FaThumbsDown className="text-gray-400 cursor-pointer" />
        </div>
        <div className="bg-gray-100 p-2 rounded-lg text-gray-700 mt-2">
          <p className="text-red-800">Seller Response:</p>
          <p className="text-gray-700">We're glad you liked them! Thank you.</p>
        </div>
      </div>
        <div className='h-0.5 w-full bg-gray-200 mt-4 mb-4 '> </div>
      </div>
  );
};

export default ReviewSection;
