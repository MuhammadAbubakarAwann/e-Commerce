import React from 'react';
import Image from 'next/image';

const Sec1 = () => {
  return (
    <div className='relative w-full h-full flex items-center justify-center'>
      <div className="absolute bottom-36 md:bottom-3 right-24 md:right-12">
        <Image
          src="/images/protected.png"
          alt="protected Image 3"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-52 md:bottom-44 right-32 md:right-36">
        <Image
          src="/images/true.png"
          alt="true Image 3"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-40 md:bottom-20 right-6 md:right-9">
        <Image
          src="/images/verified.png"
          alt="verified Image 3"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-48 md:bottom-36 right-16 md:right-16">
        <Image
          src="/images/delivery.png"
          alt="delivery Image 4"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
      <div className="absolute top-1/2 left-0 md:left-8 z-20 transform -translate-y-1/2">
        <Image
          src="/images/mobile-mockup.png"
          alt="mobile mockup Image 1"
          width={340}
          height={340}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-4 md:right-24 z-20">
        <Image
          src="/images/cart.png"
          alt="Foreground Image 2"
          width={160}
          height={160}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Sec1;
