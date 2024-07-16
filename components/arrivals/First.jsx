// components/FirstComponent.jsx
import React from 'react';

const FirstComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#03A5BB]">New Arrivals</h1>
      <p className="text-lg md:text-xl text-gray-700">
        Discover What's Fresh: Explore Our New Arrivals!
      </p>
    </div>
  );
};

export default FirstComponent;
