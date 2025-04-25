
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-4 px-4 md:px-8 flex justify-between items-center max-w-7xl mx-auto">
      <div>
        <Link to="/">
          <img 
            src="https://raw.githubusercontent.com/gist/salganker21/78bcb99d2138f33fc9f6a98804682f14/raw/d05b3dfc1aed14695a78fb886eda8e2ba9e6804c/avanse-brain-scaled.svg" 
            alt="Avanse Systems" 
            className="h-10"
          />
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <div className="relative group">
          <button className="flex items-center gap-1 text-gray-700 hover:text-primary">
            Funksjoner
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <Link to="/hvorfor-oss" className="text-gray-700 hover:text-primary">Hvorfor Oss?</Link>
        <Link to="/jobb-med-oss" className="text-gray-700 hover:text-primary">Jobb med Oss</Link>
        <Link to="/kontakt-oss" className="text-gray-700 hover:text-primary">Kontakt Oss</Link>
      </nav>
      
      <div>
        <button className="btn-primary">
          Kom i Gang <ArrowRight size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;
