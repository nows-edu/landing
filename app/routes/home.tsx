import React from 'react';
import HeroSection from './hero';
import Footer from './footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {HeroSection()}
      {Footer()}
    </div>
  );
};

export default LandingPage;
