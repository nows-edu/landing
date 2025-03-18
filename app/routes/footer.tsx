import React from 'react';
import unimateLogo from '../assets/hero/NOWS-logo.svg';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <img 
          src={unimateLogo}
          alt="NOWS" 
          className="h-12"
        />
      </div>
    </footer>
  );
};

export default Footer;