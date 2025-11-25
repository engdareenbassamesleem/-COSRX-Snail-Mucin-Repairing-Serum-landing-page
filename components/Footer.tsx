import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-darkGray text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-playfair font-bold mb-4">COSRX</h3>
          <p className="text-gray-400 max-w-sm mb-6">
            Empowering your skin with ingredient-focused, effective skincare solutions. Reveal your natural beauty today.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brightPink transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-brightPink transition-colors"><Facebook /></a>
            <a href="#" className="hover:text-brightPink transition-colors"><Twitter /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold font-montserrat mb-4 text-lg">Shop</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold font-montserrat mb-4 text-lg">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li className="flex items-center gap-2 mt-4"><Mail size={16} /> support@cosrx.com</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} COSRX. All rights reserved. This is a demo landing page.</p>
        <p className="mt-2 text-xs">
          This page contains affiliate links. We may earn a commission if you buy through our links.
        </p>
      </div>
    </footer>
  );
};