import React from 'react';
import { Button } from './Button';
import { AFFILIATE_LINK } from '../constants';
import { Timer, Truck } from 'lucide-react';

export const LimitedOffer: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-headlinePink to-brightPink py-16 text-white text-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold mb-6 border border-white/30">
          <Timer size={16} />
          <span>Limited Time Offer</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
          Ready for Your Best Skin Yet?
        </h2>
        <p className="text-xl mb-8 font-lato opacity-90">
          Order now and get fast, free shipping on eligible orders. Don't wait—stocks are running low due to high demand!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <Button href={AFFILIATE_LINK} variant="secondary" className="px-10 py-4 text-lg shadow-xl hover:scale-105">
            Get Yours Today
          </Button>
          
          <div className="flex items-center gap-2 text-sm font-semibold bg-black/10 px-4 py-2 rounded-lg">
            <Truck size={18} />
            <span>Fast Delivery Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};