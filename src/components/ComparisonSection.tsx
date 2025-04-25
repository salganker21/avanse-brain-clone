
import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <div className="py-16 md:py-24 px-4 md:px-8 bg-gradient-radial from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Gjør det selv. Ansett et team. Eller få det gjort for deg.
        </h2>
        <p className="text-gray-600 mb-16 text-center max-w-2xl mx-auto">
          Vi bygger skreddersydde automasjonssystemer for bedriftsledere som er ferdige med å kaste bort tid. <br />
          Ingen unødvendigheter. Kun resultater.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Gjør det Selv</h3>
            
            <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <X className="text-red-500 w-5 h-5 mt-1 mr-3 shrink-0" />
                <div>
                  <p className="font-medium mb-2">
                    Du bruker <span className="font-bold">timer på å lete</span> etter verktøy, ser tutorials og møter <span className="font-bold">blindveier</span>.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Systemene du bygger er skjøre og under ofte med å feile kort tiden din. Det virker fint i starten, men <span className="font-bold">koster mest i lengden</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Ansett</h3>
            
            <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <X className="text-red-500 w-5 h-5 mt-1 mr-3 shrink-0" />
                <div>
                  <p className="font-medium mb-2">
                    Du betaler <span className="font-bold">høy lønn</span> og bruker tid på opplæring. Det er <span className="font-bold">vanskelig å skalere</span>, og du sitter fortsatt med manuelle prosesser.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Det <span className="font-bold">kan funke senere</span>, men ikke nå – det løser ikke kjernen i problemet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">Avanse Systems</h3>
          
          <div className="bg-white p-8 rounded-xl border border-primary shadow-lg max-w-2xl mx-auto">
            <div className="flex items-start">
              <Check className="text-primary w-5 h-5 mt-1 mr-3 shrink-0" />
              <div>
                <p className="font-medium text-left">
                  Vi bygger det for deg – <span className="font-bold">raskt</span>. Du får <span className="font-bold">skalerbare systemer</span> og enkle arbeidsflyter som varer. En samtale, og du er i gang. Ingen gjetting. Bare <span className="font-bold">resultater</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="btn-primary mx-auto">
            START GRATIS <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
