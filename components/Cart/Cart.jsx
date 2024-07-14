import React from 'react';
import { FaTrash, FaHeart ,FaStore,FaChevronRight} from 'react-icons/fa';

const ShoppingCart = () => {
  return (
    <div className=" mt-10">
      {/* Select All Section */}
      <div className="flex justify-between items-center p-4 bg-white rounded-lg mb-4">
        <div>
          <input type="checkbox" id="selectAll" className="mr-2" />
          <label htmlFor="selectAll">Select All</label>
        </div>
        <div className="flex items-center text-red-500 cursor-pointer">
          <FaTrash className="mr-2" />
          <span>Delete</span>
        </div>
      </div>

      {/* Cart Items Section */}
      <div className="space-y-4 bg-white p-4  ">
        {/* Individual Store Section */}
        <div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="store1" className="mr-2" />
            <FaStore className="mr-2 text-gray-700" />
            <label htmlFor="store1" className="font-bold">Store Name</label>
            <FaChevronRight className="text-gray-700 text-xs ml-1" />
          </div>
          <hr />

          {/* Individual Product Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="mt-2 sm:mt-0 mr-4" />
              <img src="/images/shoeq.png" alt="Product" className="w-24 h-24 object-cover mr-4" />
              <div>
                <h3 className="font-semibold">Product Name</h3>
                <p className="text-gray-500">Short description of the product</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="text-gray-600">Size: M</div>
                  <div className="text-gray-600">Color: Red</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-4 sm:mt-0">
              <div className="flex items-center border border-gray-300 rounded mb-2">
                <button className="px-2 py-1">-</button>
                <input type="text" value="1" className="w-12 text-center border-none" />
                <button className="px-2 py-1">+</button>
              </div>
              <div className="flex items-center space-x-4 mt-4 text-lg">
                <FaHeart className="text-red-500 cursor-pointer" />
                <FaTrash className="text-gray-500 cursor-pointer" />
              </div>
            </div>
            <div className="text-right text-lg font-bold mt-4 sm:mt-0 sm:ml-4">$99.99</div>
          </div>
        </div>

        {/* Repeat the above section for more products */}
        
        
      </div>
            {/* Cart Items Section */}
            <div className="space-y-4 bg-white p-4 mb-4 mt-4">
        {/* Individual Store Section */}
        <div>
        <div className="flex items-center mb-2">
            <input type="checkbox" id="store1" className="mr-2" />
            <FaStore className="mr-2 text-gray-700" />
            <label htmlFor="store1" className="font-bold">Store Name</label>
            <FaChevronRight className="text-gray-700 text-xs ml-1" />
          </div>
          <hr />

          {/* Individual Product Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="mt-2 sm:mt-0 mr-4" />
              <img src="/images/shoeq.png" alt="Product" className="w-24 h-24 object-cover mr-4" />
              <div>
                <h3 className="font-semibold">Product Name</h3>
                <p className="text-gray-500">Short description of the product</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="text-gray-600">Size: M</div>
                  <div className="text-gray-600">Color: Red</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-4 sm:mt-0">
              <div className="flex items-center border border-gray-300 rounded mb-2">
                <button className="px-2 py-1">-</button>
                <input type="text" value="1" className="w-12 text-center border-none" />
                <button className="px-2 py-1">+</button>
              </div>
              <div className="flex items-center space-x-4 mt-4 text-lg">
                <FaHeart className="text-red-500 cursor-pointer" />
                <FaTrash className="text-gray-500 cursor-pointer" />
              </div>
            </div>
            <div className="text-right text-lg font-bold mt-4 sm:mt-0 sm:ml-4">$99.99</div>
          </div>
        </div>

        {/* Repeat the above section for more products */}
        
        
      </div>
      
      
      
      
    </div>
  );
};

export default ShoppingCart;
