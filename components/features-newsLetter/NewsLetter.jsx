import React from 'react';

const Newsletter = () => {
  return (
    <div
      className="bg-cover bg-no-repeat rounded-lg py-12 px-4 md:px-8 flex flex-col h-auto mx-auto max-w-screen-xlg"
      style={{ backgroundImage: 'url(/images/newsLetterBg.png)' }} 
    >
      <div className="text-left md:ml-7 mt-4">
        <h2 className="text-2xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">Newsletter</h2>
        <p className="text-gray-900 text-lg md:text-xl font-montserrat mb-4">
          Register now to get updates on promotions <br className="hidden md:block" /> & coupons
        </p>
      </div>
      <form className="flex flex-col md:flex-row items-center md:ml-7 mt-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="py-3 px-4 mb-4 md:mb-0 md:mr-4 w-full md:w-80 h-11 rounded-lg border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="py-3 px-6 h-11 bg-[#0A2428] text-white flex justify-center items-center font-semibold rounded-lg w-full md:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
