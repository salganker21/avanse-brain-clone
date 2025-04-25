
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vil du ha en <span className="text-blue-500">garantert løsning</span> på <br />
            det som stopper deg – <span className="text-blue-500">helt gratis?</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-4">
            Har du én ting i bedriften som stadig skaper frustrasjon?
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Trykk under – vi sender deg en konkret skreddersydd løsning som vil spare deg tid, penger og hodebry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <Check className="text-blue-500 w-4 h-4" />
              </div>
              <p className="text-gray-700">Ingen forpliktelser</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <Check className="text-blue-500 w-4 h-4" />
              </div>
              <p className="text-gray-700">Skreddersydd og konkret</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <Check className="text-blue-500 w-4 h-4" />
              </div>
              <p className="text-gray-700">under 2 minutter</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/gist/salganker21/78bcb99d2138f33fc9f6a98804682f14/raw/d05b3dfc1aed14695a78fb886eda8e2ba9e6804c/process.svg"
                alt="Process illustration"
                className="max-w-md w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg font-medium flex items-center gap-2">
            FÅ MIN LØSNING NÅ
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
