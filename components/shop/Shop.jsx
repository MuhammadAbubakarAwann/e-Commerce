// components/Shop.jsx
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const categories = [
  {
    name: 'Furniture',
    image: '/images/furniture.png',
  },
  {
    name: 'Clothing',
    image: '/images/clothing.png',
  },
  {
    name: 'Electronics',
    image: '/images/electronics.png',
  },
  {
    name: 'Books',
    image: '/images/books.png',
  },
  {
    name: 'Toys',
    image: '/images/furniture.png',
  },
  {
    name: 'Sports',
    image: '/images/books.png',
  },
  {
    name: 'Beauty',
    image: '/images/electronics.png',
  },
  {
    name: 'Groceries',
    image: '/images/clothing.png',
  },
];

const Shop = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handlePrevClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleNextClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='py-3 px-4'>
      <h2 className='ml-14 text-3xl font-bold mb-6 text-center sm:text-left'>Shop Our Top Categories</h2>
      <div className='relative flex items-center m-7 mr-10'>
        {/* Left arrow button */}
        {showLeftArrow && (
          <button
            onClick={handlePrevClick}
            className='absolute left-0 p-2 text-black text-2xl rounded-full bg-black bg-opacity-20 hover:bg-opacity-40 transition-colors duration-300 z-10 hidden sm:block'
          >
            &lt;
          </button>
        )}
        {/* Category container */}
        <div
          ref={scrollContainerRef}
          className='flex overflow-x-auto scroll-smooth mx-0 sm:mx-10'
          style={{ scrollBehavior: 'smooth' }}
        >
          {categories.map((category) => (
            <div
              key={category.name}
              className='flex-shrink-0 relative w-[200px] sm:w-[300px] h-[150px] sm:h-[250px] rounded-xl overflow-hidden sm:m-10 md:m-10 lg:m-10 group'
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-lg transition-transform duration-500 transform group-hover:scale-105'
              />
              {/* Category name overlay */}
              <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center md:items-start md:justify-start p-2 md:p-4 rounded-lg bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500'>
                <h2 className='text-white lg:ml-24 text-base sm:text-lg font-bold transition-transform duration-500 group-hover:scale-110'>
                  {category.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
        {/* Right arrow button */}
        {showRightArrow && (
          <button
            onClick={handleNextClick}
            className='absolute right-0 p-2 text-black text-2xl rounded-full bg-black bg-opacity-20 hover:bg-opacity-40 transition-colors duration-300 z-10 hidden sm:block'
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Shop;
