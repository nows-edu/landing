import React from 'react';
import HeroSection from './hero';
import Features from './features';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {HeroSection()}
      {Features()}
    </div>
  );
};

export default LandingPage;
