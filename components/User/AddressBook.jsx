// AddressBook.js
import React from 'react';
import AddressCard from './AddressCard';

const AddressBook = () => {
  const addresses = [
    { name: 'John Doe', phone: '+1234567890', address: '123 Main St, City, Country' },
    { name: 'Jane Smith', phone: '+9876543210', address: '456 Elm St, City, Country' },
    // Add more addresses as needed
  ];

  return (
    <div className="flex">
      <div className="flex-grow container mx-auto p-6 lg:ml-64">
        <h2 className="text-xl font-bold mb-4">Address Book</h2>
        <div className="flex flex-wrap -m-2 text-black">
          {addresses.map((address, index) => (
            <AddressCard
              key={index}
              addressNumber={index + 1} // Add address number dynamically
              name={address.name}
              phone={address.phone}
              address={address.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddressBook;
