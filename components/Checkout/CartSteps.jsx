import React from 'react';
import { FaShoppingCart, FaBox, FaCreditCard } from 'react-icons/fa';

const CartSteps = () => {
  return (
    <div className="px-4 sm:px-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="h-8 w-8 bg-secondary text-primary rounded-full flex items-center justify-center">
            <FaShoppingCart />
          </div>
          <p className="text-xs sm:text-sm mt-2">Cart</p>
        </div>
        <div className="flex-1 h-1 bg-gray-400 mx-2 sm:mx-4">
          <div className="h-1 bg-primary w-full"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-8 w-8 bg-secondary text-primary rounded-full flex items-center justify-center">
            <FaBox />
          </div>
          <p className="text-xs sm:text-sm mt-2">Shipping</p>
        </div>
        <div className="flex-1 h-1 bg-gray-400 mx-2 sm:mx-4">
          <div className="h-1 bg-primary w-1/4"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-8 w-8 bg-secondary text-primary rounded-full flex items-center justify-center">
            <FaCreditCard />
          </div>
          <p className="text-xs sm:text-sm mt-2">Payment</p>
        </div>
      </div>
    </div>
  );
};

export default CartSteps;
