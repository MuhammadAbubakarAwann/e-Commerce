// components/Banner.jsx
import React from 'react';
import Sec1 from './Sec1';
import Sec2 from './Sec2';
import Sec3 from './Sec3';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#00AAC2] via-[#00AAC2] to-[#0A2428] rounded-lg overflow-hidden h-auto lg:h-80 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 z-30">
      <Sec1 />
      <Sec2 />
      <Sec3 />
    </div>
  );
};

export default Banner;
