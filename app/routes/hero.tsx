// hero.tsx
import React, { useEffect, useRef } from 'react';
import NOWSLogo from '../assets/hero/NOWS.svg';
import AppLogo from '../assets/hero/dark-logo.png';
import Phone1 from '../assets/hero/phone1.png';
import Phone2 from '../assets/hero/phone2.png';
import Phone3 from '../assets/hero/phone3.png';
import Phone4 from '../assets/hero/phone4.png';
import Phone5 from '../assets/hero/phone5.png';

const HeroSection = () => {
  const phonesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (phonesRef.current) {
        const phones = phonesRef.current.querySelectorAll('.phone-image');
        phones.forEach((phone, index) => {
          const speed = 0.2 + (index * 0.2);
          const yPos = scrollPosition * speed;
          phone.style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection2 = () => {
    const section2Element = document.getElementById('section2');
    if (section2Element) {
      section2Element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative overflow-hidden bg-white p-5">
      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center md:max-w-[50%] pl-[5%] z-10 mt-20 md:mt-0">
        <div className="mb-10">
          <img src={NOWSLogo} alt="NOWS Logo" className="w-[120px] md:w-[150px]" />
        </div>
        
        <h2 className="font-['Instrument_Sans'] font-bold text-xl md:text-2xl mb-2">
          By students, for students
        </h2>
        
        <h1 className="font-['Montserrat_Alternatives'] text-3xl md:text-5xl mb-8">
          La mejor parte de la <span className="text-[#668FFF]">uni</span>
          <br />empieza aquí
        </h1>
        
        <div className="flex items-center gap-5">
          <button 
            onClick={scrollToSection2}
            className="bg-[#769AFF] text-white font-['Geologica'] font-bold py-5 px-10 rounded-full text-lg md:text-xl hover:bg-[#5a7dff] transition-colors"
          >
            ¿Aceptas el reto?
          </button>
          <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] flex items-center justify-center cursor-pointer">
            <img src={AppLogo} alt="App Logo" className="max-w-full max-h-full" />
          </div>
        </div>
      </div>

      
      {/* Phones Section */}
      <div ref={phonesRef} className="flex-1 relative h-[500px] md:h-full mt-10 md:mt-0">
        {/* Only show on desktop */}
        <div className="hidden md:block">
          <div className="phone-image absolute top-[10%] right-[5%] w-[250px] transform transition-transform duration-100">
            <img src={Phone1} alt="App Screenshot 1" className="w-full h-auto rounded-[20px] shadow-lg" />
          </div>
          <div className="phone-image absolute top-[40%] right-[35%] w-[250px] transform transition-transform duration-100">
            <img src={Phone2} alt="App Screenshot 2" className="w-full h-auto rounded-[20px] shadow-lg" />
          </div>
           <div className="phone-image absolute top-[65%] right-[65%] w-[250px] transform transition-transform duration-100">
            <img src={Phone3} alt="App Screenshot 3" className="w-full h-auto rounded-[20px] shadow-lg" />
          </div>
        </div>
        
        {/* Mobile view - centered single image */}
        <div className="md:hidden flex justify-center items-center">
          {/* <div className="w-[80%] max-w-[350px]">
            <img src="/phones/screenshot.png" alt="App Screenshots" className="w-full h-auto rounded-[20px] shadow-lg" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
