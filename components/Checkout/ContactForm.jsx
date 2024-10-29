import React from 'react';

const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 gap-4 bg-white shadow-md shadow-gray p-4 sm:p-8 rounded-lg mt-11">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Shipping Address</h2>
      <div>
        <label className="block mb-1">Contact person name *</label>
        <input type="text" className="w-full p-2 border rounded" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Phone</label>
          <div className="flex">
            <select className="p-2 border rounded-l">
              <option>+92</option>
              {/* Add other country codes as needed */}
            </select>
            <input type="text" className="w-full p-2 border rounded-r" />
          </div>
        </div>
        <div>
          <label className="block mb-1">Email *</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
      </div>
      <div>
        <label className="block mb-1">Country</label>
        <select className="w-full p-2 border rounded">
          <option>Pakistan</option>
          {/* Add other countries as needed */}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">City</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Zip Code</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
      </div>
      <div>
        <label className="block mb-1">Address</label>
        <textarea className="w-full p-2 border rounded"></textarea>
      </div>
    </div>
  );
};

export default ContactForm;
