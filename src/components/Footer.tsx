
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-16 px-4 md:px-8">
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
    </footer>
  );
};

export default Footer;
