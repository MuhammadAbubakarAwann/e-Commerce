import React from 'react';
import Image from 'next/image';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
    <div className="flex-grow py-5 px-5 mt-0">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-left text-3xl font-bold">Electronics</h2>
          <p className="text-left text-lg text-gray-600">Mobile and Tablets</p>
        </div>
        <button className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-300">Sort by <ArrowDropDownIcon className="ml-0" /> </button>
      </div>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 justify-center">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center w-[350px] h-[350px]"
            >
              <div className="w-full flex justify-center overflow-hidden">
                <Image 
                  src={product.image}
                  alt={product.name}
                  layout="intrinsic"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="w-full flex flex-col mt-4">
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <span className="text-lg font-bold">{product.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    {Array(product.rating).fill().map((_, i) => (
                      <svg 
                        key={i} 
                        className="h-4 w-4 text-yellow-500" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.99h4.198c.969 0 1.371 1.24.588 1.81l-3.405 2.47 1.286 3.99c.3.921-.755 1.688-1.538 1.117L10 13.347l-3.405 2.47c-.783.571-1.838-.196-1.538-1.117l1.286-3.99-3.405-2.47c-.783-.571-.381-1.81.588-1.81h4.198l1.286-3.99z"/>
                      </svg>
                    ))}
                  </div>
                  <button className="bg-teal-500 text-white px-3 py-1 rounded-lg text-lg">Shop Now</button>
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
