import React from 'react';
import { FaTrash, FaCreditCard, FaMobileAlt } from 'react-icons/fa';

const PaymentOptions = () => {
  const paymentOptions = [
    { id: 1, type: 'master', number: '**** **** **** 1234', label: 'Credit/Debit Card' },
    { id: 2, type: 'visa', number: '**** **** **** 5678', label: 'Credit/Debit Card' },
    { id: 3, type: 'easy', number: '**** **** 9876', label: 'Mobile Wallet' },
  ];

  const handleDelete = (id) => {
    console.log(`Delete payment option with id: ${id}`);
  };

  const getImage = (type) => {
    switch (type) {
      case 'master':
        return '/images/master.png';
      case 'visa':
        return '/images/visa.png';
      case 'easy':
        return '/images/easy.png';
      default:
        return '';
    }
  };

  const getIcon = (label) => {
    switch (label) {
      case 'Credit Card':
      case 'Credit/Debit Card':
        return <FaCreditCard className="mr-2" />;
      case 'Mobile Wallet':
        return <FaMobileAlt className="mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
    <div className="container mx-auto px-4 lg:ml-64">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-6">My Payment Options</h2>
        <ul className="space-y-4">
          {paymentOptions.map((option) => (
            <li
              key={option.id}
              className="flex flex-col sm:flex-row items-center p-4 border border-gray-300 rounded-lg"
            >
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="flex items-center mr-4 mb-2 sm:mb-0">
                  {getIcon(option.label)}
                </div>
                <img src={getImage(option.type)} alt={option.type} className="w-16 h-12 mr-4 mb-4 sm:mb-0" />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <span className="text-lg mb-2 sm:mb-0 ml-4">{option.number}</span>
                <button
                  className="text-red-600 hover:text-red-800 mt-2 sm:mt-0 sm:ml-4"
                  onClick={() => handleDelete(option.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>

  );
};

export default PaymentOptions;
