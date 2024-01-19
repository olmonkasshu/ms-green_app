import React from 'react';

const TwoColumnLayout = () => {
  return (
    <div className="flex">
      {/* Left Column */}
      <div className="flex-1">
        {/* Add your text here */}
        <p className="text-center p-8">
          Your text goes here.
        </p>
      </div>

      {/* Green Line */}
      <div className="w-1 bg-green-500"></div>

      {/* Right Column */}
      <div className="flex-1">
        {/* Add your text here */}
        <p className="text-center p-8">
          Your text goes here.
        </p>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
