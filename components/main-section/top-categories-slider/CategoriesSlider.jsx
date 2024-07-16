import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

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

const CategoriesSlider = () => {
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
    <div className='p-4'>
      <h2 className='pl-0 md:pl-10 text-xl md:text-3xl font-bold mb-6 '>Shop Our Top Categories</h2>
      <div className='relative flex items-center justify-center'>
        <div className='flex h-full w-[5%] bg-black z-30 justify-center items-center'>
          {showLeftArrow && (
            <button
              onClick={handlePrevClick}
              className='absolute flex justify-center items-center h-16 px-1 text-white text-3xl rounded-full bg-[#00AAC2] bg-opacity-50 hover:bg-opacity-80 transition-colors duration-300 z-10 sm:block'
            >
              <ChevronLeft />
            </button>
          )}
        </div>
        <div
          ref={scrollContainerRef}
          className='flex overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#00AAC2]  scrollbar-track-[#00abc239]'
          style={{ scrollBehavior: 'smooth' }}
        >
          {categories.map((category) => (
            <div
              key={category.name}
              className='flex-shrink-0 relative w-[250px] h-[250px] rounded-xl overflow-hidden my-6 mx-4 group shadow-lg transition-shadow duration-300 hover:shadow-xl'
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-lg transition-transform duration-500 transform group-hover:scale-105'
              />
              <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center p-2 md:p-4 rounded-md bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500'>
                <h2 className='text-white text-base sm:text-lg font-bold transition-transform duration-500 group-hover:scale-110 text-center'>
                  {category.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className='flex h-full w-[5%] bg-black z-30 justify-center items-center'>
          {showRightArrow && (
            <button
              onClick={handleNextClick}
              className='absolute flex justify-center items-center h-16 px-1 text-white text-3xl rounded-full bg-[#00AAC2] bg-opacity-50 hover:bg-opacity-80 transition-colors duration-300 z-10 sm:block'
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSlider;
