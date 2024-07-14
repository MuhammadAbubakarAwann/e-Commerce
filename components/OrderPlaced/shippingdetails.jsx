import React from 'react';

const ShippingDetails = ({ shippingDetails }) => (
   <div className='flex'>
          <div className="container h-full w-0.5 bg-gray-100 lg:ml-12 "></div>
  <div className="ml-6 w-full pl-8">
    <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
    <p className="text-lg">{shippingDetails.name}</p>
    <p className="text-gray-600">{shippingDetails.address}</p>
    <p className="text-gray-600">{shippingDetails.city}, {shippingDetails.state} {shippingDetails.zip}</p>
    <p className="text-gray-600">{shippingDetails.country}</p>
    <p className="text-gray-600">Phone: {shippingDetails.phone}</p>
  </div>
  </div> 
);

export default ShippingDetails;
