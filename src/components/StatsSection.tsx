
import React from 'react';

const StatsSection = () => {
  return (
    <div className="py-8 px-4 md:px-8 border-b">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:border-r md:border-gray-200">
          <h2 className="text-4xl font-bold mb-2">150+</h2>
          <p className="text-blue">Timer Spart</p>
        </div>
        
        <div className="text-center md:border-r md:border-gray-200">
          <h2 className="text-4xl font-bold mb-2">24/7</h2>
          <p className="text-blue">AI Jobber Rundt Klokka</p>
        </div>
        
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2">3.6X</h2>
          <p className="text-blue">Raskere Kunde-Service</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
