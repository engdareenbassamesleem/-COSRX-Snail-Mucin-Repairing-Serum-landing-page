import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { HowToUse } from './components/HowToUse';
import { LimitedOffer } from './components/LimitedOffer';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-opensans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <BeforeAfter />
        <Testimonials />
        <HowToUse />
        <LimitedOffer />
      </main>
      <Footer />
    </div>
  );
};

export default App;