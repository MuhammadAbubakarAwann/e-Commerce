"use client"
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Profile from './Profile';
import AddressBook from './AddressBook';
import PaymentOptions from './PaymentOptions';
import { Switch, Route } from 'react-router-dom'; // Import Switch and Route from react-router-dom

const Layout = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile />;
      case 'address':
        return <AddressBook />;
      case 'payment':
        return <PaymentOptions />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="flex-grow">
        {/* Use Switch to render only one Route */}
        <Switch>
          {/* Define your routes */}
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/address">
            <AddressBook />
          </Route>
          <Route path="/payment-options">
            <PaymentOptions />
          </Route>
          {/* Add more routes for other tabs as needed */}
        </Switch>
      </div>
    </div>
  );
};

export default Layout;
