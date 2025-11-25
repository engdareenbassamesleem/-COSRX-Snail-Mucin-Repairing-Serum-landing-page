import React from 'react';
import { Section } from './Section';
import { Droplets, Clock, Sparkles, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Droplets className="w-8 h-8 text-brightPink" />,
    title: "Deep Hydration",
    description: "Penetrates deep into the skin to provide long-lasting moisture without feeling heavy or sticky."
  },
  {
    icon: <Clock className="w-8 h-8 text-brightPink" />,
    title: "Reduces Fine Lines",
    description: "Helps stimulate collagen production to improve skin elasticity and smooth out fine lines."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-brightPink" />,
    title: "Brightens Dull Skin",
    description: "Fades dark spots and revitalizes uneven skin tone for that coveted glass-skin glow."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brightPink" />,
    title: "Korean Innovation",
    description: "Formulated with 96% Snail Secretion Filtrate, a gold standard ingredient in K-Beauty."
  }
];

export const Benefits: React.FC = () => {
  return (
    <Section id="benefits" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-playfair font-bold text-headlinePink mb-4">Why Your Skin Needs This</h2>
        <p className="text-lg text-bodyGray font-lato">The all-in-one solution for repairing, hydrating, and soothing damaged skin.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((item, index) => (
          <div 
            key={index} 
            className="group p-8 rounded-3xl bg-cream border border-transparent hover:border-pink-200 hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-montserrat font-bold text-darkGray mb-3">{item.title}</h3>
            <p className="text-bodyGray leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};