
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import GuaranteeSection from '../components/GuaranteeSection';
import CompaniesSection from '../components/CompaniesSection';
import ContactForm from '../components/ContactForm';
import JobSection from '../components/JobSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ComparisonSection from '../components/ComparisonSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <GuaranteeSection />
        <CompaniesSection />
        <JobSection />
        <TestimonialsSection />
        <ComparisonSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
