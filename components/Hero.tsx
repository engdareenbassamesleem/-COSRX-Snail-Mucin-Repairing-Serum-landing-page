import React from 'react';
import { Button } from './Button';
import { AFFILIATE_LINK, IMAGES } from '../constants';
import { Sparkles, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-cream via-white to-softPink/30">
      {/* Decorative blurred blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-softPink/40 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Content */}
        <div className="order-2 md:order-1 space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-semibold text-headlinePink border border-pink-100">
            <Sparkles size={16} fill="currentColor" />
            <span>#1 Best Seller in Facial Serums</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-headlinePink leading-tight">
            Glow Back <br />
            <span className="text-darkGray">Your Skin.</span>
          </h1>
          
          <p className="text-lg md:text-xl font-lato text-bodyGray max-w-lg leading-relaxed">
            Discover the magic of 96% Snail Mucin. Hydrate, repair, and reveal youthful skin naturally with the Korean skincare secret everyone is talking about.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button href={AFFILIATE_LINK} className="shadow-brightPink/30">
              Shop Now
            </Button>
            <Button href="#benefits" variant="secondary">
              Explore Benefits
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <div className="flex -space-x-4">
              {[IMAGES.USER1, IMAGES.USER2, IMAGES.USER3].map((img, i) => (
                <img 
                  key={i} 
                  src={img} 
                  alt="User" 
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm text-bodyGray font-semibold">40,000+ 5-Star Reviews</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative w-[300px] md:w-[400px]">
            <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl transform scale-110"></div>
            <img 
              src={IMAGES.PRODUCT} 
              alt="COSRX Snail Mucin" 
              className="relative z-10 w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 rounded-3xl"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex flex-col items-center border border-pink-50 animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-2xl font-bold font-playfair text-headlinePink">96%</span>
              <span className="text-xs uppercase tracking-wide font-bold text-darkGray">Snail Mucin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};