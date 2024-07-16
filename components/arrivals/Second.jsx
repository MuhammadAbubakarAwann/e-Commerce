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
    name: 'Car Toy',
    image: '/images/car.png', // replace with actual image paths
    price: '$149.99',
    rating: 5,
    description: 'Vintage Car Model',
  },
  {
    name: 'Rubik\'s Cube',
    image: '/images/cube.png', // replace with actual image paths
    price: '$149.99',
    rating: 5,
    description: 'Classic Puzzle Cube',
  },
];

const SecondComponent = () => {
  return (
    <div className="py-10 px-4">
      <div className="container m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`bg-white lg:m-5 sm:m-1 rounded-lg shadow-lg p-3 ${index === 1 ? 'lg:h-[550px]' : 'lg:h-[550px]'  } lg:w-[450px] sm:w-[300px] flex flex-col items-center`}
              style={{ marginTop: index !== 1 ? 'auto' : 'initial' }} // Align bottom of left and right cards with middle card
            >
              <div className={`w-full flex justify-center ${index === 1 ? 'lg:h-[600px]' : 'lg:h-[550px]'} sm:h-[300px] overflow-hidden p-1`}>
                <Image 
                  src={product.image}
                  alt={product.name}
                  layout="intrinsic"
                  width={400}
                  height={index === 1 ? 400 : 400}  
                  className="object-fill"
                />
              </div>
              <div className="w-full  flex flex-col ">
                <div className="flex justify-between items-center lg:w-full mt-10 ">
                  <h2 className="lg:text-xl font-semibold ml-4 sm:text-lg">{product.name}</h2>
                  <span className="lg:text-xl font-bold lg:mr-5 sm:mr-10  sm:text-lg">{product.price}</span>
                </div>
                <p className="text-gray-600 ml-4 sm:text-lg ">{product.description}</p>
                <div className="flex items-center mt-2 w-full justify-between">
                  <div className="flex items-center ml-4">
                    {Array(product.rating).fill().map((_, i) => (
                      <svg 
                        key={i} 
                        className="h-5 w-5  text-yellow-500" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.99h4.198c.969 0 1.371 1.24.588 1.81l-3.405 2.47 1.286 3.99c.3.921-.755 1.688-1.538 1.117L10 13.347l-3.405 2.47c-.783.571-1.838-.196-1.538-1.117l1.286-3.99-3.405-2.47c-.783-.571-.381-1.81.588-1.81h4.198l1.286-3.99z"/>
                      </svg>
                    ))}
                    <span className="text-gray-600  sm:text-sm ">({product.rating})</span>
                  </div>
                  <button className="bg-teal-500 text-white lg:px-4 lg:py-2 rounded-lg lg:mr-3 lg:mb-2 sm:px-4 sm:py-4 p-1 ">Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
