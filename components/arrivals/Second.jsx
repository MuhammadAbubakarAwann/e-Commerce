import React from 'react';
import Image from 'next/image';

const products = [
  {
    name: 'Sneakers',
    image: '/images/sneakers.png',
    price: '$149.99',
    rating: 5,
    description: 'Premium Running Shoes',
  },
  {
    name: 'Car Toy',
    image: '/images/car.png',
    price: '$149.99',
    rating: 5,
    description: 'Vintage Car Model',
  },
  {
    name: 'Rubik\'s Cube',
    image: '/images/cube.png',
    price: '$149.99',
    rating: 5,
    description: 'Classic Puzzle Cube',
  },
];

const SecondComponent = () => {
  return (
    <div className=" px-5 py-5 md:py-10 mx-0 md:mx-1 lg:py-10 lg:px-20 xl:px-40">
        <div className="flex flex-col md:flex-row md:gap-3  lg:gap-9 items-end">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg 0 shadow-lg p-3 mt-4 md:mt-0 ${index === 1 ? 'h-[380px] lg:h-[420px] xl:h-[520px]' : 'h-[300px] lg:h-[350px] xl:h-[450px]'} flex flex-col  `}
            >
              <div className="flex justify-center h-[80%] overflow-hidden p-1">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                />
              </div>
              <div className="w-full flex flex-col">

                <div className="flex justify-between items-center w-full px-1">
                  <h2 className="font-bold font-sans text-xl lg:text-3xl">{product.name}</h2>
                  <span className="font-bold">{product.price}</span>
                </div>

                <p className="text-gray-600 pl-1 font-semibold text-md">{product.description}</p>

                <div className="flex items-center mt-2 w-full justify-between">
                  <div className="flex items-center ml-4">
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
                    <span className="text-gray-600 sm:text-sm">({product.rating})</span>
                  </div>
                  <button className="bg-[#00AAC2] hover:bg-[#0A2428] md:text-sm text-white rounded-lg px-1 py-1 md:px-0.5  md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-2 mr-1">Shop Now</button>
                </div>
              </div>

            </div>
          ))}
        </div>
    </div>
  );
};

export default SecondComponent;
