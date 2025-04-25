
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComparisonSection from '../components/ComparisonSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';

const HvorforOss = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="py-16 px-4 md:px-8 bg-gradient-blue">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue font-medium rounded-full mb-6">
              HVORFOR OSS?
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hvorfor velge Avanse Systems?
            </h1>
            <p className="text-gray-700 max-w-3xl">
              Vi bygger automasjonsløsninger som frigjør din tid, eliminerer repetitive oppgaver, og lar deg fokusere på å vokse bedriften din.
            </p>
          </div>
        </div>
        <StatsSection />
        <TestimonialsSection />
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  );
};

export default HvorforOss;
