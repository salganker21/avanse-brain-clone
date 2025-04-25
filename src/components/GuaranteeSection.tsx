
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <div className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vil du ha en <span className="text-blue">garantert løsning</span> på det som stopper deg — <span className="text-blue">helt gratis?</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Har du én ting i bedriften som stadig skaper frustrasjon? <br />
            Trykk under – vi sender deg en konkret skreddersydd løsning som vil spare deg tid, penger og hodebry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <Check className="text-blue w-4 h-4" />
                </div>
                <p className="text-gray-700">Ingen forpliktelser</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <Check className="text-blue w-4 h-4" />
                </div>
                <p className="text-gray-700">Skreddersydd og konkret</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <Check className="text-blue w-4 h-4" />
                </div>
                <p className="text-gray-700">under 2 minutter</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="bg-gradient-blue p-8 rounded-3xl relative">
              <img
                src="https://raw.githubusercontent.com/gist/salganker21/78bcb99d2138f33fc9f6a98804682f14/raw/d05b3dfc1aed14695a78fb886eda8e2ba9e6804c/process.svg"
                alt="Process illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="btn-primary mx-auto">
            FÅ MIN LØSNING NÅ <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;
