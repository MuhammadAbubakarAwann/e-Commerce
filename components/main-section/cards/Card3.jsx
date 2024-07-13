





import React from 'react';
import Image from 'next/image';

import neon_r from '../../../public/images/neon-r.png';
import smoke from '../../../public/images/smoke.png';
import shoe from '../../../public/images/shoe.png';
import shoes from '../../../public/images/shoes.png';
import open_box from '../../../public/images/open-box.png';

const Card3 = () => {
  return (
    <div className='relative w-full h-[325px] bg-[#00AAC2] rounded-xl overflow-hidden '>
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
        src={open_box}
        alt="SmileShop Logo"
        width={140}
      />
      <Image
        className='absolute bottom-0 left-[30%]'
        src={shoes}
        alt="SmileShop Logo"
        width={180}
      />
      <Image
        className='absolute bottom-4 right-1'
        src={smoke}
        alt="SmileShop Logo"
        width={400}
      />
      <Image
        className='absolute top-[8%] right-[3%] '
        src={shoe}
        alt="SmileShop Logo"
        width={220}
      />
    </div>

  );
};

export default Card3;
