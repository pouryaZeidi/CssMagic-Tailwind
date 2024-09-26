import React from 'react';

const FlipCard = ({ src, src2 }) => {
  return (
    <div className="relative h-52 w-52 sm:h-60 sm:w-60 md:h-64 md:w-64 lg:w-96 lg:h-96 perspective">
      <div className="flip-card relative w-full h-full">
        <div className="flip-card-inner w-full h-full">
          {/* Front Side */}
          <div className="flip-card-front bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <img src={src} alt="Front Image" className="w-full h-full object-cover rounded-3xl" />
          </div>
          {/* Back Side */}
          <div className="flip-card-back bg-gray-300 flex items-center justify-center overflow-hidden rounded-lg rotate-y-180">
            <img src={src2} alt="Back Image" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
