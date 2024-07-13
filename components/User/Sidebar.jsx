'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as FaIcons from 'react-icons/fa';

const Sidebar = ({ activeTab }) => {
  const router = useRouter();

  const links = [
    { name: 'My Profile', path: '/Checkout/profile', icon: <FaIcons.FaUser className="mr-2" /> },
    { name: 'Address Book', path: '/Checkout/address', icon: <FaIcons.FaRegAddressCard className="mr-2" /> },
    { name: 'My Payment Options', path: '/Checkout/payment-options', icon: <FaIcons.FaCreditCard className="mr-2" /> },
    { name: 'My Orders', path: '/Checkout/orders', icon: <FaIcons.FaBoxOpen className="mr-2" /> },
    { name: 'My Reviews', path: '/Checkout/reviews', icon: <FaIcons.FaStar className="mr-2" /> },
    { name: 'My Wishlist', path: '/Checkout/wishlist', icon: <FaIcons.FaHeart className="mr-2" /> },
    { name: 'Become a Seller', path: '/Checkout/seller', icon: <FaIcons.FaStore className="mr-2" /> },
  ];

  return (
    <div className="bg-secondary text-white h-screen w-56 flex flex-col fixed left-0 top-0">
      <div className="p-4 border-b border-gray-700">
        <p className="text-xl font-bold">Hello, UserName</p>
      </div>
      <div className="p-4 border-b border-gray-700">
        <p className="text-lg font-bold mb-4">Manage my Account</p>
        <ul>
          {links.map((link) => (
            <li
              key={link.path}
              className={`flex items-center mb-10 mt-6 ml-2 ${router.pathname === link.path ? 'text-primary' : ''}`}
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
  );
};

export default Sidebar;
