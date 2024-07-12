// components/Features.jsx

import React from 'react';
import { FiTruck, FiRefreshCw, FiLock, FiHeadphones } from 'react-icons/fi';

const features = [
  {
    icon: <FiTruck size={34} />,
    title: 'Fast Delivery',
    description: 'Same Day in Your City',
  },
  {
    icon: <FiRefreshCw size={34} />,
    title: '7 Days Replacement',
    description: 'If goods have problems',
  },
  {
    icon: <FiLock size={34} />,
    title: 'Secure Payment',
    description: '100% secure payment',
  },
  {
    icon: <FiHeadphones size={34} />,
    title: '24/7 Support',
    description: 'Dedicated Support',
  },
];

const Features = () => {
  return (
    <div className="bg-[#00abc239] py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-row items-center ${
                index !== features.length - 1 ? 'border-r border-gray-600' : ''
              } px-4`}
            >
              <div className="text-[#00AAC2] mr-2">{feature.icon}</div>
              <div className="text-left">
                <h3 className="text-lg font-semibold font-montserrat">{feature.title}</h3>
                <p className="text-gray-600 font-montserrat">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
