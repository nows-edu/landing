import React, { useState }  from 'react';
import { ArrowRight, Users, FolderOpen, Wallet } from 'lucide-react';

// Assets
import socialMediaPana from '../assets/hero/Social-media-pana.svg';
import unimateLogo from '../assets/hero/Unimate-logo.png';


const FeatureCard = ({ icon: Icon, title, description, link }) => (
    <div className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center text-center">
      <div className="bg-gray-800 rounded-full p-4 mb-6">
        <Icon className="w-6 h-6 text-[#6D4CFF]" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <a 
        href={link} 
        className="text-[#6D4CFF] flex items-center gap-2 hover:text-purple-300 transition-colors"
      >
        Saber más <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );

const HeroSection = () => {
const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const features = [
    {
      icon: Users,
      title: "Conéctate con tu campus y amigos",
      description: "Desde eventos hasta clubes, explora las actividades de los campus universitarios a través de nuestro mapa interactivo y mantente al tanto de lo que sucede.",
      link: "#"
    },
    {
      icon: FolderOpen,
      title: "Encuentra a tu grupo ideal",
      description: "Proveemos varios espacios en los que podrás encontrar, según tus gustos y necesidades, gente con la que compartir tus experiencias.",
      link: "#"
    },
    {
      icon: Wallet,
      title: "Apoyo y diversión de la mano",
      description: "En UNImate, cada paso que tomes en tu viaje universitario es recompensado. Participa en actividades, sigue tus objetivos y consigue premios en sorteos exclusivos. Tendrás posibilidades infinitas, ¡hazla tuya!",
      link: "#"
    }
  ];


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xpwzqyvw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-emerald-900 via-gray-900 to-purple-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z" 
                fill="white" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-40">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z" 
                fill="white" opacity="0.1" />
        </svg>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="pt-8 flex justify-center">
          <img src={unimateLogo} alt="UNiMATE" className="h-12" />
        </div>

        {/* Hero content */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-20 pb-12">
          {/* Left side content */}
          <div className="lg:w-1/2 text-white space-y-6">
            <div className="text-sm font-medium mb-4">By students, for students</div>
            <h1 className="text-5xl font-bold leading-tight">
              Vive la <span className="text-[#6D4CFF]">experiencia</span><br />
              universitaria<br />
              <span className="text-[#6D4CFF]">más allá</span> de las clases
            </h1>
            <p className="text-gray-300 text-lg max-w-md">
              Descubre nuevos eventos, conecta con otros estudiantes y,
              sobre todo, disfruta <span className="text-[#6D4CFF]">sin límites</span>.
            </p>
            
            {/* Email input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-3 mt-8 max-w-md">
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Introduce tu correo..."
                    required
                    className="w-full px-6 py-4 rounded-[24px] bg-white/10 backdrop-blur-sm 
                       border border-white/20 text-white placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                    type="submit"
                    className="p-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors flex items-center justify-center"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
                </form>

                {submitted && (
                <div className="mt-2 text-green-400">
                    ¡Gracias por suscribirte!
                </div>
                )}
          </div>

          {/* Right side illustration */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img 
                src={socialMediaPana} 
                alt="Student with megaphone" 
                className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;