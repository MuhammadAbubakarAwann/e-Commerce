



import React from 'react';
import Image from 'next/image';

import neon_r from '../../../public/images/neon-r.png';
import smoke from '../../../public/images/smoke.png';
import pod from '../../../public/images/pod.png';
import air_pod from '../../../public/images/air-pod.png';
import half_box from '../../../public/images/half-box.png';

const Card2 = () => {
  return (
    <div className='relative w-full h-[220px] bg-[#00AAC2] rounded-xl overflow-hidden '>
     <div className=" flex justify-center items-center flex-col absolute top-[8%] left-[4%]">
        <button className=' bg-black text-white  rounded-lg text-md p-1 px-2'>Learn More</button>
        <h1 className='  font-krona text-2xl font-normal text-[#ffffffd0] text-center mt-1 '>
          check out <br /> the best
        </h1>
        <h4 className='  font-kulim  font-normal text-sm text-[#ffffffd0] text-center '>for Whole Pakistan</h4>
      </div>
      <Image
        className='absolute bottom-0 right-0 '
        src={neon_r}
        alt="neon ring"
        width={80}
      />
      <Image
        className='absolute bottom-0 left-0'
        src={half_box}
        alt="SmileShop Logo"
        width={100}
      />
      <Image
        className='absolute bottom-0 left-[32%]'
        src={pod}
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
        className='absolute top-[6%] right-[2%] '
        src={air_pod}
        alt="SmileShop Logo"
        width={150}
      />
    </div>

  );
};

export default Card2;
