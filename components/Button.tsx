import React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  href,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-montserrat font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg";
  
  const variants = {
    primary: "bg-brightPink text-white hover:bg-lightPinkHover hover:shadow-pink-300/50",
    secondary: "bg-white text-headlinePink border-2 border-headlinePink hover:bg-softPink hover:text-white hover:border-softPink",
    outline: "border-2 border-white text-white hover:bg-white hover:text-headlinePink"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};