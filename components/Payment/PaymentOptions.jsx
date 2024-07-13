"use client"
import React, { useState } from 'react';


// Use absolute paths to the images in the public directory
const cashOnDeliveryIcon = '/images/Banknote.png';
const visaIcon = '/images/visa.png';
const easypaisaIcon = '/images/easy.png';
const paypalIcon = '/images/paypal.png';
const mastercardIcon = '/images/master.png';


const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  return (
    
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg shadow-gray-200">
      <h2 className="text-xl font-bold mb-6">Select a payment method to proceed</h2>
      
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cashOnDelivery" className="mr-2" onChange={handleMethodChange}/>
          <label htmlFor="cashOnDelivery" className="flex items-center border p-2 rounded-lg cursor-pointer">
            <img src={cashOnDeliveryIcon} alt="Cash on Delivery" className="mr-2 h-10"/>
            Cash on Delivery
          </label>
        </div>
        
        <h3 className="text-lg font-bold mb-4 mt-10">Pay via Online</h3>
        
        <div className="flex mb-4 mt-10">
          <div className="flex items-center mr-4">
            <input type="radio" id="visa" name="paymentMethod" value="visa" className="mr-2" onChange={handleMethodChange}/>
            <label htmlFor="visa" className="flex items-center cursor-pointer">
              <img src={visaIcon} alt="Visa" className="h-12 mr-44"/>
            </label>
          </div>
          
          <div className="flex items-center mr-4">
            <input type="radio" id="easypaisa" name="paymentMethod" value="easypaisa" className="mr-2" onChange={handleMethodChange}/>
            <label htmlFor="easypaisa" className="flex items-center cursor-pointer">
              <img src={easypaisaIcon} alt="EasyPaisa" className="h-12"/>
            </label>
          </div>
          </div>
          <div className="flex mb-4 mt-10">
          <div className="flex items-center mr-4">
            <input type="radio" id="paypal" name="paymentMethod" value="paypal" className="mr-2" onChange={handleMethodChange}/>
            <label htmlFor="paypal" className="flex items-center cursor-pointer">
              <img src={paypalIcon} alt="PayPal" className="h-12 mr-44"/>
            </label>
          </div>
          
          <div className="flex items-center">
            <input type="radio" id="mastercard" name="paymentMethod" value="mastercard" className="mr-2" onChange={handleMethodChange}/>
            <label htmlFor="mastercard" className="flex items-center cursor-pointer">
              <img src={mastercardIcon} alt="MasterCard" className="h-12"/>
            </label>
          </div>
        </div>
      </div>
      
      {selectedMethod === 'easypaisa' && (
        <div>
            <h1 className='font-bold mt-6 mb-2 text-lg'>Enter Phone Number</h1>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium">Phone Number</label>
            <input type="text" id="phoneNumber" className="w-full p-2 border rounded" placeholder="03XX XXXXXXX"/>
          </div>
        </div>
      )}
      
      {selectedMethod && selectedMethod !== 'cashOnDelivery' && selectedMethod !== 'easypaisa' && (
        <div>
            <h1 className='font-bold mt-6 mb-2 text-lg'>Enter Card Details</h1>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium">Card Holder Number</label>
            <input type="text" id="cardNumber" className="w-full p-2 border rounded" placeholder="123 345 567 789"/>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium">Expiry Date</label>
              <input type="text" id="expiryDate" className="w-full p-2 border rounded" placeholder="18 / 23"/>
            </div>
            <div>
              <label htmlFor="cvc" className="block text-sm font-medium">CVC</label>
              <input type="text" id="cvc" className="w-full p-2 border rounded" placeholder="XXX"/>
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="cardHolderName" className="block text-sm font-medium">Card holder's name</label>
            <input type="text" id="cardHolderName" className="w-full p-2 border rounded" placeholder="Name on card"/>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
