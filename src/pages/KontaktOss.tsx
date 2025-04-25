
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const KontaktOss = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue font-medium rounded-full mb-6">
              KONTAKT OSS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vi er her for å hjelpe
            </h1>
            <p className="text-gray-700 max-w-3xl">
              Har du spørsmål eller ønsker å komme i gang? Fyll ut skjemaet under så tar vi kontakt med deg så snart som mulig.
            </p>
          </div>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default KontaktOss;
