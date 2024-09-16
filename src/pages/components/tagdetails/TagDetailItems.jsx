import React, { useState } from 'react';

const TagDetailItems = ({ title, imageUrl }) => {
  // State to handle showing the image and text
  const [showDetails, setShowDetails] = useState(false);

  // Toggle function to show/hide the image and text
  const toggleDetails = () => {
    setShowDetails(prev => !prev); // Use functional update for better performance
  };

  return (
    <div className="max-w-md p-4 border border-orange-400 rounded-lg shadow-lg">
      {/* Title */}
      <h2
        onClick={toggleDetails}
        className="text-blue-600 font-semibold text-lg cursor-pointer hover:underline mb-4"
      >
        {title}
      </h2>

      {/* Conditionally render the image and text */}
      {showDetails && (
        <div className="flex items-start space-x-4">
          {/* Image */}
          <img
            src={imageUrl}
            alt="Tag"
            className="w-32 h-32 object-cover rounded-lg"
          />

          {/* Text */}
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      )}
    </div>
  );
};

export default TagDetailItems;
