
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-blue py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-blue">Systemer som Jobber</span>{" "}
            <span className="text-black">— Så Du Slipper</span>
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            Vi bygger ferdige automasjoner for deg som fjerner repeterende oppgaver, organiserer arbeidsflyt din og lar deg fokusere på vekst — ikke kjedelig rutinearbeid.
          </p>
          <button className="btn-primary">
            GRATIS DEMO <ArrowRight size={18} />
          </button>
        </div>
        <div className="relative h-[400px] md:h-auto">
          <img
            src="https://raw.githubusercontent.com/gist/salganker21/78bcb99d2138f33fc9f6a98804682f14/raw/d05b3dfc1aed14695a78fb886eda8e2ba9e6804c/firmware.svg"
            alt="Automation illustration"
            className="absolute right-0 h-full object-contain z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
