import React from 'react'
import { FaTrash, FaChevronRight , FaShoppingCart, FaStore } from 'react-icons/fa';
const Wishlist = () => {
  return (
    <div className="flex">
    <div className="container mx-auto px-4 lg:ml-64">
    <div className=" ">
    <h2 className="text-xl font-bold mb-4">My Orders</h2>
    {/* Select All Section */}
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-50 rounded-lg mb-4 mt-10">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="mr-2">Show:</span>
            <select className="border border-gray-300 rounded p-1">
              <option value="last5">Last 5 Orders</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex items-center mt-2 md:mt-0 md:ml-4">
            <span className="mr-2">Sort by:</span>
            <select className="border border-gray-300 rounded p-1">
              <option value="toPay">To Pay</option>
              <option value="toReceive">To Receive</option>
              <option value="toShip">To Ship</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

    {/* Cart Items Section */}
    <div className="space-y-4 bg-gray-50 p-4">
          {/* Individual Store Section */}
          <div>
          <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div>
                  <label htmlFor="store1" className="font-bold text-lg">Order#135235</label>
                  <p className="text-gray-500 text-sm">Placed on 24 Jul 2024 3:44:54</p>
                </div>
              </div>
            </div>

            <hr />

            {/* Individual Product Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 justify-between">
              <div className="flex items-center">
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
                <div className="text-lg font-bold">
                  $99.99
                  <span className="text-md text-black sm:ml-16 ml-10 lg:ml-32">Qty: 2</span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-4 sm:mt-0">
                <div className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded">
                  <span>Delivered</span>
                </div>
   
              </div>
            </div>
          </div>


      {/* Repeat the above section for more products */}
      
      
    </div>
    </div>
    </div>
    </div>
  )
}

export default Wishlist