import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from './Button';
import { AFFILIATE_LINK, NAVIGATION_LINKS } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brightPink to-gold flex items-center justify-center text-white font-bold font-playfair">
            C
          </div>
          <span className={`text-2xl font-playfair font-bold ${isScrolled ? 'text-darkGray' : 'text-darkGray'}`}>
            COSRX
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-lato text-darkGray hover:text-brightPink transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <Button href={AFFILIATE_LINK} variant="primary" className="px-6 py-2 text-sm">
            Shop Now
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-darkGray"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 md:hidden flex flex-col p-6 gap-4">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-darkGray font-lato font-semibold hover:text-brightPink py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button href={AFFILIATE_LINK} fullWidth>
            Buy on Amazon
          </Button>
        </div>
      )}
    </header>
  );
};