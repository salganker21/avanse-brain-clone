import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer>
      <div className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue font-medium rounded-full mb-6">
              PRØV DET NÅ!
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Bli Med <span className="text-blue-600">266,000+</span> Bedrifter
              <br />Som Automatiserer Med AI
            </h2>
            <p className="text-gray-700 mb-6">
              Gratis 15-minutters strategisamtale. Vi kartlegger arbeidsflyten din,
              finner automatiseringsmuligheter og hjelper deg i gang.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">GRATIS DEMO</Button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="public/lovable-uploads/c1a0c315-4e86-4d1f-adb3-555aafcad524.png"
              alt="AI Automation Demo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-footer text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold mb-6 uppercase text-blue-200">PRODUKTER</h3>
            <Link to="/book-demo" className="text-gray-300 mb-3 hover:text-white">Book en gratis demo</Link>
            <Link to="/systemplan" className="text-gray-300 mb-3 hover:text-white">Systemplan samtale</Link>
            <Link to="/losningsplan" className="text-gray-300 mb-3 hover:text-white">Gratis løsningsplan</Link>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-semibold mb-6 uppercase text-blue-200">LØSNINGER</h3>
            <Link to="/lead-innhenting" className="text-gray-300 mb-3 hover:text-white">Lead-innhenting & kvalifisering</Link>
            <Link to="/arbeidsflyt" className="text-gray-300 mb-3 hover:text-white">Intern arbeidsflyt</Link>
            <Link to="/planlegging" className="text-gray-300 mb-3 hover:text-white">Planlegging & påminnelser</Link>
            <Link to="/skreddersydd" className="text-gray-300 mb-3 hover:text-white">Skreddersydd løsning</Link>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-semibold mb-6 uppercase text-blue-200">OM OSS</h3>
            <Link to="/om-avanse" className="text-gray-300 mb-3 hover:text-white">Om Avanse Systems</Link>
            <Link to="/personvern" className="text-gray-300 mb-3 hover:text-white">Personvernerklæring</Link>
            <Link to="/vilkar" className="text-gray-300 mb-3 hover:text-white">Vilkår og betingelser</Link>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-semibold mb-6 uppercase text-blue-200">KONTAKT</h3>
            <a href="mailto:sverre@avansesystems.com" className="text-gray-300 mb-3 hover:text-white">sverre@avansesystems.com</a>
            <Link to="/skjema" className="text-gray-300 mb-3 hover:text-white">Skjema</Link>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 mb-3 hover:text-white">LinkedIn</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 mb-3 hover:text-white">Facebook</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="https://raw.githubusercontent.com/gist/salganker21/78bcb99d2138f33fc9f6a98804682f14/raw/d05b3dfc1aed14695a78fb886eda8e2ba9e6804c/avanse-brain-scaled.svg" 
              alt="Avanse Systems" 
              className="h-8 mr-3"
            />
            <span className="text-white font-medium">Avanse Systems</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 Avanse Systems. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
