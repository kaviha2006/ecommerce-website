// Category.js
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Category() {
  const { type } = useParams();

  // Format the category name (capitalize first letter)
  const formattedType = type
    ? type.charAt(0).toUpperCase() + type.slice(1)
    : 'Category';

  return (
    <div className="container mt-5 pt-5 text-center">
      <h2 className="mb-4">Category: {formattedType}</h2>
      <p className="lead">Products under <strong>{formattedType}</strong> will appear here.</p>

      {/* Placeholder content */}
      <div className="alert alert-info mt-4">
        (You can later filter products from MongoDB based on this category.)
      </div>
    </div>
  );
}
