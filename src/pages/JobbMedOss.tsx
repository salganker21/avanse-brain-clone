
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobSection from '../components/JobSection';

const JobbMedOss = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue font-medium rounded-full mb-6">
              JOBB MED OSS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              La oss bygge systemet ditt – sammen
            </h1>
            <p className="text-gray-700 max-w-3xl">
              Systemer som sparer tid, fjerner unødvendig arbeid og holder bedriften i gang – sømløst.
            </p>
          </div>
        </div>
        <JobSection />
        <div className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <img
              src="https://raw.githubusercontent.com/gist/salganker21/78bcb99d2138f33fc9f6a98804682f14/raw/d05b3dfc1aed14695a78fb886eda8e2ba9e6804c/chatbot.svg"
              alt="Chatbot"
              className="w-full max-w-3xl mx-auto"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobbMedOss;
