import React from 'react';
import HeroSection from './hero';
import InitialForm from './InitialForm';
import RoadMap from './Roadmap';
import Contacts from './Contacts';
import BigForm from './BigForm';
import SecondForm from './SecondForm';
import Footer from './Footer';
import { Section } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {HeroSection()}
      <div id="section2">
      {InitialForm()}
      </div>
      {RoadMap()} 
      {Contacts()}
      <br/><br/><br/><br/><br/><br/>
      {BigForm()}
      {SecondForm()}
      {Footer()}
    </div>
  );
};

export default LandingPage;
