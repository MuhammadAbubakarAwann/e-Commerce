// components/Tabs.js
"use client"
import React, { useState } from 'react';
import Overview from './Overview';
import Specification from './Specification';
import ReviewSection from './ReviewSection';
import "../../src/app/globals.css"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <Overview />;
      case 'Specification':
        return <Specification />;
      case 'Review':
        return <ReviewSection />;
      default:
        return <Overview />;
    }
  };

  return (
    <div>
      <div className=" border-b-2 border-gray-200">
        <a 
          className={`tab tab-lifted ${activeTab === 'Overview' ? 'tab-active text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Overview')}
        >
          Overview
        </a>
        <a 
          className={`tab tab-lifted ${activeTab === 'Specification' ? 'tab-active text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Specification')}
        >
          Specification
        </a>
        <a 
          className={`tab tab-lifted ${activeTab === 'Review' ? 'tab-active text-gray-900 border-b-2 border-blue-900' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Review')}
        >
          Review
        </a>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default Tabs;
