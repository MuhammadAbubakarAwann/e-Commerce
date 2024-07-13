// components/CartSteps.js
import React from 'react';
import { FaShoppingCart, FaBox, FaCreditCard } from 'react-icons/fa';

const CartSteps = () => {
  return (
    <div>
    <div className="flex">
      <div className="items-center">
        <div className="h-8 w-8 bg-secondary text-primary  rounded-full flex items-center justify-center"><FaShoppingCart/></div>
      </div>
      <div className='h-1 w-40 mt-4 bg-gray-400'>
      <div className='h-1 w-40 bg-primary'></div>
      </div>
 
      <div className=" items-center">
        <div className="h-8 w-8 bg-secondary text-primary rounded-full flex items-center justify-center "><FaBox/></div>
        
      </div>
      <div className='h-1 w-40 mt-4 bg-gray-400'>
      <div className='h-1 w-10 bg-primary'></div>
      </div>
      <div className=" items-center ">
        <div className="h-8 w-8 text-primary bg-secondary rounded-full flex items-center justify-center"><FaCreditCard/></div>
      </div>
    </div>
    <div className="flex mb-4 mt-2">
        <p className='text-sm'>Cart</p>
        <p className='ml-40 text-sm'>Shipping</p>
        <p className='ml-32 text-sm'>Payment</p>
    </div>
    </div>
  );
};

export default CartSteps;
