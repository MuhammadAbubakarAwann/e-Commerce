// AddressCard.js
"use client"
import React, { useState } from 'react';

const AddressCard = ({ name, phone, address, addressNumber }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ name, phone, address });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission (e.g., update the address details)
    console.log(formData);
    setEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 flex-1 relative">
      <div className="mb-2">
        <p className="text-md font-bold">Address {addressNumber}</p>
      </div>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            placeholder="Phone"
            required
          />
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            placeholder="Address"
            rows="3"
            required
          />
          <div className="flex justify-end">
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary hover:text-primary mr-2">
              Save
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="mb-2">
            <label className="text-sm font-semibold text-gray-600">Name</label>
            <p className="text-lg">{name}</p>
          </div>
          <div className="mb-2">
            <label className="text-sm font-semibold text-gray-600">Phone</label>
            <p className="text-lg">{phone}</p>
          </div>
          <div className="mb-2">
            <label className="text-sm font-semibold text-gray-600">Address</label>
            <p className="text-lg">{address}</p>
          </div>
          <button
            className="absolute top-2 right-2 text-primary hover:underline"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default AddressCard;
