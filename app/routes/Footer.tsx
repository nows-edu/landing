import React from 'react';
import NOWSLogo from '../assets/hero/NOWS.svg'; 

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t-2 border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="text-black font-bold text-xl">
          <img src={NOWSLogo} alt="NOWS Logo" className="h-16" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
