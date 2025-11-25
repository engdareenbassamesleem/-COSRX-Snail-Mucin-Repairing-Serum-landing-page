import React from 'react';
import { Section } from './Section';
import { IMAGES } from '../constants';

export const BeforeAfter: React.FC = () => {
  return (
    <Section id="results" className="bg-gradient-to-b from-cream to-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-playfair font-bold text-headlinePink mb-4">Real Results</h2>
        <p className="text-lg text-bodyGray">Visible improvements in hydration and texture after just 2 weeks.</p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
          <img src={IMAGES.BEFORE} alt="Before usage" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]" />
          <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-lg font-bold text-darkGray shadow-sm backdrop-blur-sm">
            Day 1
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <p className="text-white font-lato">Dull, dehydrated skin with visible texture.</p>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-gold/30">
          <img src={IMAGES.AFTER} alt="After usage" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute top-4 left-4 bg-brightPink px-4 py-2 rounded-lg font-bold text-white shadow-sm">
            Day 14
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <p className="text-white font-lato">Plump, glowing, and deeply hydrated complexion.</p>
          </div>
        </div>
      </div>
      
      <p className="text-center text-sm text-gray-400 mt-8 italic">*Results may vary based on skin type and condition.</p>
    </Section>
  );
};