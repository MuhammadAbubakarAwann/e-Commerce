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
    <div className="lg:px-12 xl:px-24">
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-2 flex flex-col items-center lg:h-[300px]  sm:h-auto"
            style={{ minWidth: '250px' }}
          >
            <div className=" flex justify-center h-[80%] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={350}
                height={350}
              />
            </div>
            <div className="w-full flex flex-col ">
              <div className="flex justify-between items-center w-full px-1">
                <h2 className="font-bold font-sans text-xl lg:text-2xl">{product.name}</h2>
                <span className="font-bold">{product.price}</span>
              </div>

              <p className="text-gray-600 pl-1 font-semibold text-md">{product.description}</p>
              <div className="flex items-center justify-between ">
                <div className="flex items-center justify-center">
                  {Array(product.rating).fill().map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.99h4.198c.969 0 1.371 1.24.588 1.81l-3.405 2.47 1.286 3.99c.3.921-.755 1.688-1.538 1.117L10 13.347l-3.405 2.47c-.783.571-1.838-.196-1.538-1.117l1.286-3.99-3.405-2.47c-.783-.571-.381-1.81.588-1.81h4.198l1.286-3.99z" />
                    </svg>
                  ))}
                  <span className="text-gray-600 ">{`(${product.rating})`}</span>
                </div>
                <button className="text-[#00AAC2] bg- border border-black rounded-lg px-1 py-1 lg:px-2 lg:py-1 mr-1">Shop Now</button>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selling;