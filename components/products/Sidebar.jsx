import React from 'react';
import { Checkbox, Slider, Button } from '@mui/material';
import { Star } from '@mui/icons-material';

const Sidebar = () => {
  const categories = ['Mobile', 'Headphone', 'Charger', 'Cable'];
  const locations = ['Islamabad', 'Lahore', 'Karachi', 'Peshawar'];

  return (
    <div className="p-10 pt-8 w-64 bg-gray-100 mt-8 ml-5">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Categories</h3>
        {categories.map((category, index) => (
          <div key={index} className="flex items-center mb-1">
            <Checkbox size="small" />
            <label className="ml-2 text-sm">{category}</label>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Price</h3>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Condition</h3>
        <div className="flex space-x-2">
          <Button variant="outlined" size="small">New</Button>
          <Button variant="outlined" size="small">Used</Button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Location</h3>
        {locations.map((location, index) => (
          <div key={index} className="flex items-center mb-1">
            <Checkbox size="small" />
            <label className="ml-2 text-sm">{location}</label>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Rating</h3>
        <div className="flex flex-col space-y-1">
          {[5, 4, 3, 2, 1].map((rating, index) => (
            <div key={index} className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`text-yellow-500 ${i < rating ? 'fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
