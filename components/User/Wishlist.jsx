import React from 'react'
import { FaTrash, FaChevronRight , FaShoppingCart, FaStore } from 'react-icons/fa';
const Wishlist = () => {
  return (
    <div className="flex">
    <div className="container mx-auto px-4 lg:ml-64">
    <div className=" mt-10">
    <h2 className="text-xl font-bold mb-4">My Wislist</h2>
    {/* Select All Section */}
    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg mb-4 mt-10">
      <div>

        <label className='text-primary'>ADD ALL TO CART</label>
      </div>

    </div>

    {/* Cart Items Section */}
    <div className="space-y-4 bg-gray-50 p-4">
          {/* Individual Store Section */}
          <div>
          <div className="flex items-center">
              <div className="flex items-center">
                <FaStore className="mr-2 text-gray-700" />
                <label htmlFor="store1" className="font-bold">Store Name</label>
              </div>
              <FaChevronRight className="text-gray-700 text-xs ml-1" />
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
                <div className="text-lg font-bold">$99.99</div>
                <div className="flex items-center text-xs  text-red-500 cursor-pointer mt-4">
                  <FaTrash className="mr-2" />
                  <span>Remove from wishlist</span>
                </div>
              </div>
              <div className="flex flex-col items-center mt-4 sm:mt-0">
                <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded">
                  <FaShoppingCart />
                  <span>Add to cart</span>
                </button>
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