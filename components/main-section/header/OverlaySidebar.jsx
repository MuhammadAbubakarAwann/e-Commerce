// components/OverlaySidebar.jsx
import React from 'react';
import Icons from './Icons';
import NavLinks from './NavLinks';

const OverlaySidebar = ({ isOpen, onClose }) => (
  <div className={`fixed inset-0 bg-black z-50 bg-opacity-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
    <div className="absolute top-0 right-0 bg-[#0A2428] w-64 h-full p-4">
      <button onClick={onClose} className="text-[#00AAC2] focus:outline-none mb-4">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <Icons vertical />
      <br />
      <hr />
      <br />
      <NavLinks vertical />
      
    </div>
  </div>
);

export default OverlaySidebar;
