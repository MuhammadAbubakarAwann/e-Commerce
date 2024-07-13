import React from 'react';
import Image from 'next/image';

import neon_r from '../../../public/images/neon-r.png';
import ring from '../../../public/images/ring.png';
import rings from '../../../public/images/rings.png';
import close_Box from '../../../public/images/close-box.png';
import smoke from '../../../public/images/smoke.png';

const Card1 = () => {
  return (
    <div className='relative w-full h-[325px] bg-[#00AAC2] rounded-xl overflow-hidden z-10'>
      <div className=" flex justify-center items-center flex-col absolute top-[12%] left-[6%]">
        <button className=' bg-black text-white rounded-lg text-lg   p-2 px-3'>Learn More</button>
        <h1 className='  font-krona text-3xl font-normal text-[#ffffffd0] text-center mt-2 '>
          check out <br /> the best
        </h1>
        <h4 className='  font-kulim  font-normal text-[#ffffffd0] text-center '>for Whole Pakistan</h4>
      </div>
      <Image
        className='absolute bottom-0 right-0'
        src={neon_r}
        alt="SmileShop Logo"
        width={100}
      />
      <Image
        className='absolute bottom-0 left-0'
        src={close_Box}
        alt="SmileShop Logo"
        width={140}
      />
      <Image
        className='absolute bottom-0 left-[37%]'
        src={rings}
        alt="SmileShop Logo"
        width={120}
      />
      <Image
        className='absolute bottom-4 right-1'
        src={smoke}
        alt="SmileShop Logo"
        width={400}
      />
      <Image
        className='absolute top-[10%] right-[5%] -z-10'
        src={ring}
        alt="SmileShop Logo"
        width={180}
      />
    </div>

  );
};

export default Card1;
