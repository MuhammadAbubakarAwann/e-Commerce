import React from 'react';
import Sec1 from './Sec1';
import Sec2 from './Sec2';
import Sec3 from './Sec3';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#00AAC2] via-[#00AAC2] to-[#0A2428] rounded-lg overflow-hidden h-auto lg:h-80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 z-30">
      <div className="flex items-center justify-center md:row-span-2 lg:row-span-1">
        <Sec1 />
      </div>
      <div className="flex items-center justify-center md:col-span-2 lg:col-span-1 lg:row-span-1">
        <Sec2 />
      </div>
      <div className="flex items-center justify-center md:row-span-2 lg:row-span-1">
        <Sec3 />
      </div>
    </div>
  );
};

export default Banner;
