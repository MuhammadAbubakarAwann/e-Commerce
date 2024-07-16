// components/NewArrivals.jsx
import React from 'react';
import FirstComponent from './First';
import SecondComponent from './Second';


const NewArrivals = () => {
  return (
    <div className="container-fluid bg-green-50 ">
      
      <div > 
       <FirstComponent/>
      </div>
      <div className="container mx-auto px-4 py-8 sm:px- lg:px-8">
       <SecondComponent/>
      </div>
    </div>
  );
};

export default NewArrivals;
