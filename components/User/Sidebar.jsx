import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as FaIcons from 'react-icons/fa';

const Sidebar = ({ activeTab }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'My Profile', path: '/Checkout/profile', icon: <FaIcons.FaUser className="mr-2 text-white" /> },
    { name: 'Address Book', path: '/Checkout/address', icon: <FaIcons.FaRegAddressCard className="mr-2 text-white" /> },
    { name: 'My Payment Options', path: '/Checkout/payment-options', icon: <FaIcons.FaCreditCard className="mr-2 text-white" /> },
    { name: 'My Orders', path: '/Checkout/orders', icon: <FaIcons.FaBoxOpen className="mr-2 text-white" /> },
    { name: 'My Reviews', path: '/Checkout/reviews', icon: <FaIcons.FaStar className="mr-2 text-white" /> },
    { name: 'My Wishlist', path: '/Checkout/wishlist', icon: <FaIcons.FaHeart className="mr-2 text-white" /> },
    { name: 'Become a Seller', path: '/Checkout/seller', icon: <FaIcons.FaStore className="mr-2 text-white" /> },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:flex lg:flex-col lg:bg-secondary lg:text-white lg:w-56  lg:left-0 lg:top-0 lg:transform lg:transition-transform lg:duration-300 lg:ease-in-out">
      {/* Hamburger Icon/Button for Small Screens - Hidden when sidebar is open */}
      {!isOpen && (
        <button className="text-xl font-bold mt-10 ml-6" onClick={toggleSidebar}>
          <FaIcons.FaBars className="mr-2 text-black" />
        </button>
      )}

      {/* Sidebar Content */}
      <div className={`lg:transform lg:transition-transform lg:duration-300 lg:ease-in-out lg:translate-x-0 lg:flex lg:flex-col lg:bg-secondary lg:text-white lg:w-56 lg:fixed lg:left-0 lg:top-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-secondary`}>
        {/* Close Icon/Button */}
        <button className="lg:hidden absolute top-4 right-4 text-xl text-white" onClick={toggleSidebar}>
          <FaIcons.FaTimes />
        </button>

        {/* Sidebar Header for both Large Screen and Hamburger Sidebar */}
        <div className="p-4 border-b border-gray-700">
          <p className="text-xl font-bold text-white">Hello, UserName</p>
        </div>

        {/* Manage my Account for both Large Screen and Hamburger Sidebar */}
        <div className="p-4 text-white">
          <p className="text-lg font-bold">Manage my Account</p>
        </div>

        {/* Sidebar Links */}
        <div className="p-4 border-b border-gray-700">
          <ul className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
            {links.map((link) => (
              <li
                key={link.path}
                className={`flex items-center mb-10 ml-2 ${router.pathname === link.path ? 'text-primary' : ''}`}
              >
                {link.icon}
                <Link href={link.path} legacyBehavior>
                  <a className={`hover:text-gray-400 ${router.pathname === link.path ? 'text-primary' : 'text-white'}`}>
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
