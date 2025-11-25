import React from 'react';
import { Section } from './Section';
import { Star, Quote } from 'lucide-react';
import { IMAGES } from '../constants';

const testimonials = [
  {
    name: "Sarah Jenkins",
    image: IMAGES.USER1,
    quote: "I was skeptical about 'snail mucin', but this saved my dry skin in winter. It's not sticky at all and absorbs instantly. My holy grail!",
    role: "Verified Buyer"
  },
  {
    name: "Michelle Ko",
    image: IMAGES.USER2,
    quote: "My acne scars have faded significantly. I use it every morning and night. It gives that perfect 'glass skin' look under makeup.",
    role: "Skincare Enthusiast"
  },
  {
    name: "Jessica Alverez",
    image: IMAGES.USER3,
    quote: "The texture is unique but the results are undeniable. My fine lines around my eyes look much softer. Worth every penny.",
    role: "Verified Buyer"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="reviews" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-playfair font-bold text-headlinePink mb-4">Loved by Thousands</h2>
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-gold fill-current" />
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-cream rounded-3xl p-8 relative hover:-translate-y-2 transition-transform duration-300">
            <Quote className="absolute top-6 right-6 text-pink-200 w-12 h-12 rotate-180" />
            <div className="flex items-center gap-4 mb-6">
              <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white" />
              <div>
                <h4 className="font-bold font-montserrat text-darkGray">{t.name}</h4>
                <p className="text-xs text-headlinePink font-semibold uppercase">{t.role}</p>
              </div>
            </div>
            <p className="text-bodyGray italic leading-relaxed">"{t.quote}"</p>
          </div>
        ))}
      </div>
    </Section>
  );
};