import React from 'react';
import HeroSection from './hero';
import Features from './features';
import Footer from './footer';


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {HeroSection()}
      {Features()}
      {Footer()}
    </div>
  );
};

export default LandingPage;
