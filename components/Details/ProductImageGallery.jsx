// components/ProductImageGallery.js
import React from 'react';
import './ProductImageGallery.css'; // Import CSS file for custom styles

const ProductImageGallery = () => {
  return (
    <div className="col-span-1">
      <div className="main-image-container">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Product Image"
          className="main-image"
        />
      </div>
      <div className="flex space-x-2 mt-4">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Product Image"
          className="thumbnail-image"
        />
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Product Image"
          className="thumbnail-image"
        />
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Product Image"
          className="thumbnail-image"
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
