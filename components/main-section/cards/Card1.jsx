import React from 'react';
import Image from 'next/image';

import neon_r from '../../../public/images/neon-r.png';
import ring from '../../../public/images/ring.png';
import rings from '../../../public/images/rings.png';
import close_Box from '../../../public/images/close-box.png';
import smoke from '../../../public/images/smoke.png';

const Card1 = () => {
  return (
    <div className='relative w-full h-[220px] bg-[#00AAC2] rounded-xl overflow-hidden z-10'>
      <div className=" flex justify-center items-center flex-col absolute top-[8%] left-[4%]">
        <button className=' bg-black text-white  rounded-lg text-md p-1 px-2'>Learn More</button>
        <h1 className='  font-krona text-2xl font-normal text-[#ffffffd0] text-center mt-1 '>
          check out <br /> the best
        </h1>
        <h4 className='  font-kulim  font-normal text-sm text-[#ffffffd0] text-center '>for Whole Pakistan</h4>
      </div>
      <Image
        className='absolute bottom-0 right-0 -z-20'
        src={neon_r}
        alt="neon ring"
        width={80}
      />
      <Image
        className='absolute bottom-0 left-0'
        src={close_Box}
        alt="close box"
        width={100}
      />
      <Image
        className='absolute bottom-0 left-[37%]'
        src={rings}
        alt="SmileShop Logo"
        width={80}
      />
      <Image
        className='absolute -top-10 right-0'
        src={smoke}
        alt="SmileShop Logo"
        width={400}
      />
      <Image
        className='absolute top-[10%] right-[2%] -z-10'
        src={ring}
        alt="SmileShop Logo"
        width={140}
      />
    </div>

  );
};

export default Card1;
