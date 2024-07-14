// components/Checkout.js
import React from 'react';
import CartSteps from '../../components/Cart/CartSteps';
import Cart from '../../components/Cart/Cart';
import OrderSummary from '../../components/Cart/OrderSummary';
import "../../src/app/globals.css"


const Checkout = () => {
  return (
    <div className='container-fluid bg-gray-50'>
    <main className="container mx-auto flex flex-col lg:flex-row my-10">
      <div className="w-full lg:w-2/3 p-4">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        <CartSteps />
        <form>
          <Cart />
        </form>
      </div>
      <OrderSummary />
    </main>

    </div>
  );
};

export default Checkout;
