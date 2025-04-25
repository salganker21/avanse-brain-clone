
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const JobSection = () => {
  return (
    <div className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 font-medium rounded-full mb-6 mx-auto text-center block">
          JOBB MED OSS
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          La oss bygge systemet ditt – sammen
        </h2>
        <p className="text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Systemer som sparer tid, fjerner unødvendig arbeid og holder bedriften i gang – sømløst.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <Card className="p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-gray-400">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                  <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Utforsker Bare</h3>
                <p className="text-2xl font-bold text-black">GRATIS</p>
              </div>
            </div>
            
            <p className="mb-8">Book en gratis 15-minutters samtale</p>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <Check className="text-gray-400 w-5 h-5 mt-1" />
                <p className="text-gray-600">Ingen forpliktelser</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-gray-400 w-5 h-5 mt-1" />
                <p className="text-gray-600">Fortell oss om bedriften din</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-gray-400 w-5 h-5 mt-1" />
                <p className="text-gray-600">Vi viser deg hva som er mulig</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-gray-400 w-5 h-5 mt-1" />
                <p className="text-gray-600">Få svar på spørsmålene dine</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-gray-400 w-5 h-5 mt-1" />
                <p className="text-gray-600">Se om vi er en god match</p>
              </div>
            </div>
            
            <Button variant="outline" className="w-full rounded-full flex items-center justify-center gap-2">
              BOOK EN SAMTALE NÅ <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
          
          {/* Right Card */}
          <Card className="bg-blue-600 text-white p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                  <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Klar til å Starte</h3>
                <p className="text-2xl font-bold">Skreddersydd</p>
              </div>
            </div>
            
            <p className="mb-8">Få en tilpasset systemplan</p>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <Check className="text-white w-5 h-5 mt-1" />
                <p>Gå gjennom hvordan bedriften din fungerer i dag</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-white w-5 h-5 mt-1" />
                <p>Finn oppgaver som sløser tid</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-white w-5 h-5 mt-1" />
                <p>Skisser opp den ideelle arbeidsflyten</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-white w-5 h-5 mt-1" />
                <p>Velg riktige verktøy</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-white w-5 h-5 mt-1" />
                <p>Planlegg automasjonen steg for steg</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-white w-5 h-5 mt-1" />
                <p>Sett forventninger og tidslinjer</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-white w-5 h-5 mt-1" />
                <p>Kom i gang med systemet ditt</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-white w-5 h-5 mt-1" />
                <p>Få svar på alt du lurer på</p>
              </div>
            </div>
            
            <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-full flex items-center justify-center gap-2">
              KOM I GANG NÅ <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobSection;
