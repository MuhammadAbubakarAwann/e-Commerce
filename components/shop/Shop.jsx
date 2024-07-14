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
      <h2 className='ml-5 text-3xl font-bold mb-6'>Shop Our Top Categories</h2>
      <div className='relative flex items-center'>
        {showLeftArrow && (
          <button
            onClick={handlePrevClick}
            className='absolute left-0 p-2 text-black text-2xl rounded-full bg-black bg-opacity-20 hover:bg-opacity-40 transition-colors duration-300'
          >
            &lt;
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className='flex overflow-x-auto scroll-smooth mx-10'
          style={{ scrollBehavior: 'smooth' }}
        >
          {categories.map((category) => (
            <div
              key={category.name}
              className='flex-shrink-0 relative w-[350px] h-[309px] rounded-xl overflow-hidden m-7 group'
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                style={{ objectFit: 'cover' }}
                className='mr-5 rounded-lg transition-transform duration-500 transform group-hover:scale-105'
              />
              <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center rounded-lg bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500'>
                <h2 className='mb-56 text-white text-2xl font-bold transition-transform duration-500 group-hover:scale-110'>
                  {category.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
        {showRightArrow && (
          <button
            onClick={handleNextClick}
            className='absolute right-0 p-2 text-black text-2xl rounded-full bg-black bg-opacity-20 hover:bg-opacity-40 transition-colors duration-300'
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Shop;
