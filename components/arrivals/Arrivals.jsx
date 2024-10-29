// components/NewArrivals.jsx
import React from 'react';
import FirstComponent from './First';
import SecondComponent from './Second';


const NewArrivals = () => {
  return (
    <div className="container-fluid  ">
      
      <div > 
       <FirstComponent/>
      </div>
      <div className="flex items-center justify-center   ">
       <SecondComponent/>
      </div>
    </div>
  );
};

export default NewArrivals;
