import React from 'react';
// Assets
import socialMediaPana from '../assets/features/social-media-pana.svg';
import djParty from '../assets/features/dj-party-amico.svg';
import sportFamily from '../assets/features/sport-family-amico.svg';
import swipeProfile from '../assets/features/swipe-profile-amico.svg';


const Features = () => {
  const features = [
    {
      title: (
        <>
          Un <span className="text-[#6D4CFF]">mapa interactivo</span> interuniversitario
        </>
      ),
      description: "Descubre en tiempo real todas las actividades y eventos que se realizan en las universidades, identifica puntos clave del campus y encuentra nuevos espacios para disfrutar y conectar. ¡Mantente siempre informado sobre todo lo que sucede en tu universidad y más allá!",
      imageSrc: socialMediaPana,
      imageAlt: "Interactive map illustration",
      reverse: true
    },
    {
      title: (
        <>
          <span className="text-[#5956E9]">Descubre</span> fiestas, actividades y eventos
        </>
      ),
      description: "El portal de eventos de UNImate te permite ver las actividades gratuitas que se ofrezcan en las universidades. Con el calendario o el buscador podrás encontrar la actividad que más se adapte a ti y buscar gente que con quien compartirlo.",
      imageSrc: djParty,
      imageAlt: "Events illustration",
      reverse: false
    },
    {
      title: (
        <>
          Encuentra tu <span className="text-[#6D4CFF]">comunidad</span> ideal
        </>
      ),
      description: "En UNImate, queremos facilitarte la conexión con otros estudiantes basándonos en tus intereses y necesidades. Con nuestro recomendador de perfiles, podrás encontrar compañeros para compartir piso o conocer a alguien con quien salir a tomar algo.",
      imageSrc: sportFamily,
      imageAlt: "Community illustration",
      reverse: true
    },
    {
      title: (
        <>
          <span className="text-[#5956E9]">Conoce</span> a gente según tus necesidades
        </>
      ),
      description: "En UNImate, te ayudamos a encontrar personas que compartan tus intereses. A través de nuestro recomendador de perfiles, podrás conocer a futuros compañeros de piso, amigos para salir o incluso personas con las que compartir actividades universitarias.",
      imageSrc: swipeProfile,
      imageAlt: "Community illustration",
      reverse: false
    }
  ];

  return (
    <div className="w-full bg-black text-white">
      {features.map((feature, index) => (
        <section 
          key={index}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" // Significantly reduced padding
        >
          <div className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-4`}> {/* Reduced gap */}
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-3"> {/* Further reduced space between text elements */}
              <h2 className="text-4xl font-bold leading-tight">
                {feature.title}
              </h2>
              <p className="text-gray-300 text-lg max-w-xl"> {/* Added max-width to match design */}
                {feature.description}
              </p>
            </div>

            {/* Image with tighter constraints */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full max-w-sm"> {/* Reduced max-width */}
                <img
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: '300px' }} // Added explicit max height
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );

};

export default Features;