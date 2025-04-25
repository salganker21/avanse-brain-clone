
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CompaniesSection = () => {
  return (
    <div className="py-16 md:py-24 px-4 md:px-8 bg-gradient-blue">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue font-medium rounded-full mb-6">
            PRØV DET NÅ!
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bli Med <span className="text-blue">266,000+</span> Bedrifter Som Automatiserer Med AI
          </h2>
          <p className="text-gray-700 mb-8">
            Gratis 15-minutters strategisamtale. Vi kartlegger arbeidsflyten din, finner automatiseringsmuligheter og hjelper deg i gang.
          </p>
          <button className="btn-primary">
            GRATIS DEMO
          </button>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative">
            <img
              src="https://raw.githubusercontent.com/gist/salganker21/78bcb99d2138f33fc9f6a98804682f14/raw/d05b3dfc1aed14695a78fb886eda8e2ba9e6804c/AI-voiceinterface.svg"
              alt="AI Voice Interface"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesSection;
