import React from 'react';
import { Section } from './Section';
import { Droplet, Sun, Moon } from 'lucide-react';

export const HowToUse: React.FC = () => {
  return (
    <Section id="how-to-use" className="bg-softPink/10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-playfair font-bold text-headlinePink mb-6">How to Glow</h2>
          <p className="text-bodyGray mb-8 text-lg">Incorporate this simple step into your daily routine for maximum results.</p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-brightPink shadow-sm font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold text-darkGray mb-2 font-montserrat">Cleanse & Tone</h3>
                <p className="text-bodyGray">Start with a clean face. Apply your favorite toner to prep your skin.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-brightPink shadow-sm font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold text-darkGray mb-2 font-montserrat">Apply Essence</h3>
                <p className="text-bodyGray">Pump 2-3 drops of Snail Mucin onto your fingertips. Gently pat onto the face for better absorption.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-brightPink shadow-sm font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold text-darkGray mb-2 font-montserrat">Moisturize</h3>
                <p className="text-bodyGray">Follow up with a moisturizer to lock in the hydration.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100 relative">
          <div className="absolute -top-6 -right-6 bg-gold text-white px-6 py-2 rounded-full font-bold shadow-lg animate-bounce">
            Pro Tip!
          </div>
          <h3 className="text-2xl font-playfair font-bold text-headlinePink mb-6 text-center">When to Apply</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-cream rounded-2xl p-6 text-center hover:bg-softPink transition-colors group cursor-default">
              <Sun className="w-10 h-10 mx-auto mb-4 text-gold group-hover:text-white transition-colors" />
              <h4 className="font-bold text-darkGray group-hover:text-white">Morning</h4>
              <p className="text-sm text-gray-500 mt-2 group-hover:text-white/90">For all-day hydration and glow under makeup.</p>
            </div>
            <div className="bg-darkGray rounded-2xl p-6 text-center text-white">
              <Moon className="w-10 h-10 mx-auto mb-4 text-purple-300" />
              <h4 className="font-bold">Night</h4>
              <p className="text-sm text-gray-400 mt-2">Deep repair and regeneration while you sleep.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};