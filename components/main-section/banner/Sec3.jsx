// components/Sec3.jsx
import React from 'react';
import Image from 'next/image';

const Sec3 = () => {
  return (
    <div className='relative w-full lg:w-1/3 h-80 lg:h-full'>
      <div className="absolute right-0 top-6  sm:-top-14 md:-top-9">
        <Image
          src="/images/persons.png"
          alt="persons"
            width={410}
            height={410}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Sec3
