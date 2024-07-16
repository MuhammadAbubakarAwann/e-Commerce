// components/Selling.jsx
import React from 'react';
import Image from 'next/image';

const products = [
  {
    name: 'Sneakers',
    image: '/images/sneakers.png', // replace with actual image paths
    price: '$149.99',
    rating: 5,
    description: 'Premium Running Shoes',
  },
  {
    name: 'Sneakers',
    image: '/images/sneakers.png', // replace with actual image paths
    price: '$149.99',
    rating: 5,
    description: 'Premium Running Shoes',
  },
  {
    name: 'Sneakers',
    image: '/images/sneakers.png', // replace with actual image paths
    price: '$149.99',
    rating: 5,
    description: 'Premium Running Shoes',
  },
  {
    name: 'Sneakers',
    image: '/images/sneakers.png', // replace with actual image paths
    price: '$149.99',
    rating: 5,
    description: 'Premium Running Shoes',
  },
  {
    name: 'Sneakers',
    image: '/images/sneakers.png', // replace with actual image paths
    price: '$149.99',
    rating: 5,
    description: 'Premium Running Shoes',
  },
  {
    name: 'Sneakers',
    image: '/images/sneakers.png', // replace with actual image paths
    price: '$149.99',
    rating: 5,
    description: 'Premium Running Shoes',
  },
];

const Selling = () => {
  return (
    <div className="py-10 px-5">
      <h2 className="text-center text-5xl font-bold mb-10">Our Best Selling Items</h2>
      <div className="container  lg:mx-36  sm:mx-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center lg:w-[400px] lg:h-[450px] sm:w-full sm:h-auto"
              style={{ minWidth: '250px' }} // Set a minimum width for smaller devices
            >
              <div className="w-full flex justify-center overflow-hidden">
                <Image 
                  src={product.image}
                  alt={product.name}
                  layout="intrinsic"
                  width={400}
                  height={300}
                  className="object-fill"
                />
              </div>
              <div className="w-full flex flex-col mt-4">
                <div className="flex justify-between items-center lg:w-full">
                  <h2 className="text-xl font-semibold text-center">{product.name}</h2>
                  <span className="text-xl font-bold">{product.price}</span>
                </div>
                <p className="text-gray-600">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center justify-center">
                    {Array(product.rating).fill().map((_, i) => (
                      <svg 
                        key={i} 
                        className="h-5 w-5 text-yellow-500" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.99h4.198c.969 0 1.371 1.24.588 1.81l-3.405 2.47 1.286 3.99c.3.921-.755 1.688-1.538 1.117L10 13.347l-3.405 2.47c-.783.571-1.838-.196-1.538-1.117l1.286-3.99-3.405-2.47c-.783-.571-.381-1.81.588-1.81h4.198l1.286-3.99z"/>
                      </svg>
                    ))}
                    <span className="text-gray-600 ">{`(${product.rating})`}</span>
                  </div>
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-lg ">Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selling;
