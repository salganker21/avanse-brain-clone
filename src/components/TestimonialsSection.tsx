
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emma T',
    title: 'KLINIKKSJEF, VELVÆRESENTER',
    image: 'https://pouch.jumpshare.com/preview/3Y-08arFgNEGRvAzCIGHuJnklwRQQg7lUnj83xtS7Tpjz1LWUMoRmeuK-7ej4Hri5csFmKOlOqyAw30rYkHNrbUeDdcfIlUGKX8yYjV-nlI',
    testimonial: 'Automatisering av oppfølging og onboarding av kunder – "Oppfølgingene våre pleide å være manuelle og tidkrevende. Med det nye systemet får hver nye kunde planlagte påminnelser, innsjekk og skjemaer – alt sendt automatisk."'
  },
  {
    id: 2,
    name: 'Sophia L',
    title: 'OPERASJONSSJEF',
    image: 'https://pouch.jumpshare.com/preview/LjloECvQ0j_AA1-LduK1Urty3NVvGcA-w4E-MicQ14kC3NN3QIbZe-Nd3xhRDCvG5csFmKOlOqyAw30rYkHNrbUeDdcfIlUGKX8yYjV-nlI',
    testimonial: 'Automatisering av kundeservice – "Vi brukte tidligere flere timer hver dag på å svare på de samme kundehenvendelsene. Nå blir alt håndtert umiddelbart. Teamet vårt har endelig tid til å fokusere på de store linjene i stedet for kaset i innboksen."'
  },
  {
    id: 3,
    name: 'Daniel M',
    title: 'GRÜNDER, SERVICEBEDRIFT',
    image: 'https://pouch.jumpshare.com/preview/F9lRmP6Zqk74DluihEuU2FtLod0IscXkyjY16UEYGDV27-Kce3KV-FXXU4_4yQN75csFmKOlOqyAw30rYkHNrbUeDdcfIlUGKX8yYjV-nlI',
    testimonial: 'Lead-innhenting + timebooking – "Leads gikk ofte tapt når NÅ får hver henvendelse et øyeblikkelig svar, og bookinger skjer uten at vi gjør noe. Det føles som om bedriften vår driver seg selv."'
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 ${index === activeIndex ? 'ring-2 ring-primary' : ''}`}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-xs bg-blue-100 text-blue px-2 py-1 rounded-full inline-block">{testimonial.title}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-700">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 mr-2"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
