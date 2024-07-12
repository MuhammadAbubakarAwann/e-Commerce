// components/Header.jsx
import React, { useState } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';
import Icons from './Icons';
import HamburgerIcon from './HamburgerIcon';
import OverlaySidebar from './OverlaySidebar';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="bg-[#0A2428] text-[#ffffffb6]">
      <div className="bg-gradient-to-r from-[rgb(10,36,40)] to-[#00AAC2] text-center py-1 text-xs font-montserrat flex items-center justify-center">
        <svg
          className="w-4 h-4 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.293a1 1 0 00-1.414-1.414L8 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z"
            clipRule="evenodd"
          />
        </svg>
        Free Delivery All Over The Country. Cash On Delivery
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6">
        <div className="flex justify-between lg:justify-center items-center w-full md:w-1/5">
          <Logo />
          <HamburgerIcon onClick={toggleSidebar} />
        </div>
        <div className="flex flex-col items-center w-full md:w-3/5 mt-4 md:mt-0 ">
          <SearchBar />
          <div className="hidden md:block w-full mt-4 md:mt-8 flex justify-center items-center">
            <NavLinks />
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center w-full md:w-1/5 mt-4 md:mt-0">
          <Icons />
        </div>
      </div>
      <OverlaySidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
    </header>
  );
};

export default Header;
