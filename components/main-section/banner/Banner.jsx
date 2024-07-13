// components/Banner.jsx

import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#00AAC2] to-[#0A2428] rounded-lg overflow-hidden h-80 flex items-center justify-center  z-30">
      <div className='relative w-full h-full'>
        <div className="absolute  bottom-3 right-12 ">
          <Image
            src="/images/protected.png"
            alt="protected Image 3"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-44 right-36">
          <Image
            src="/images/true.png"
            alt="true Image 3"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-20 right-9">
          <Image
            src="/images/verified.png"
            alt="verified Image 3"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-36 right-16">
          <Image
            src="/images/delivery.png"
            alt="delivery Image 4"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
        <div className="absolute top-1/2 left-10 z-20 transform -translate-y-1/2">
          <Image
            src="/images/mobile-mockup.png"
            alt="mobile mockup Image 1"
            width={340}
            height={340}
            className="object-contain"
          />
        </div>

        <div className="absolute bottom-0 right-24 z-20 ">
          <Image
            src="/images/cart.png"
            alt="Foreground Image 2"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>
      </div>
      <div className='relative w-full h-full flex items-center flex-col pt-5'>
        <h2 className='font-montserrat text-[#ffffffd4] font-bold text-2xl'>Your One-Stop Destination</h2>
        <h3 className='font-montserrat text-[#ffffffbb] font-medium '>for All Your Shopping Needs</h3>
        <h1 className='font-montserrat text-[#ffffffe9] font-extrabold text-3xl mt-2'>Welcome to Smile Shop!</h1>
        <p className=' text-white font-light text-center mt-1'>Discover a world of endless possibilities at Smile Shop. From the latest electronics to stylish fashion, home essentials to beauty products, we have it all. Enjoy a seamless shopping experience with unbeatable prices, fast shipping, and excellent customer service. Shop now and let us put a smile on your face!</p>
        <button className='bg-[#092428] px-5 py-2 text-white font-medium mt-4'>Shop Now</button>
      </div>

      <div className='relative w-full h-full '>
        <div className="absolute right-0 -top-9">
          <Image
            src="/images/persons.png"
            alt="persons"
            width={410}
            height={410}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
