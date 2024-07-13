import React from 'react';
import Image from 'next/image';

const OrderDetails = ({ orderDetails }) => (
  <div className="w-1/2">
    <h2 className="text-2xl font-bold mb-4">Your Order</h2>
    {orderDetails.map((item, index) => (
      <div key={index}>
        <div className="flex items-center mb-4">
          <Image src={item.image} alt={item.name} width={96} height={96} className="mr-4" />
          <div>
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <p className="text-gray-600">Price: ${item.price}</p>
          </div>
        </div>
        {index !== orderDetails.length - 1 && <hr className="my-2" />} {/* Add horizontal line if not the last item */}
      </div>
    ))}
  </div>
);

export default OrderDetails;
