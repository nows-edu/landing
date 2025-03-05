import React from 'react';
import NOWSLogo from '../assets/hero/NOWS.svg';
import { useInView } from 'react-intersection-observer';

const RoadMap = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-8">
      <div className="flex items-center">
        <img src={NOWSLogo} alt="NOWS Logo" className="h-16 mr-4" />
        <p className="font-darkerGrotesque text-4xl">es para ti si...</p>
      </div>
      <div
        ref={ref1}
        className={`flex mt-32 ${inView1 ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="w-2/6"></div>
        <p className="w-4/6 font-instrumentSans font-bold text-2xl text-left">
          Te vendieron la moto de que la uni sería la mejor etapa de tu vida pero
          no te enteras de nada.
        </p>
      </div>
      <div
        ref={ref2}
        className={`flex mt-32 ${inView2 ? 'fade-in' : 'opacity-0'}`}
      >
        <p className="w-4/6 font-instrumentSans font-bold text-2xl text-left">
          Has querido hablar con otros universitarios pero no te has atrevido
        </p>
        <div className="w-2/6"></div>
      </div>
      <div
        ref={ref3}
        className={`flex mt-32 ${inView3 ? 'fade-in' : 'opacity-0'}`}
      >
        <div className="w-2/6"></div>
        <p className="w-4/6 font-instrumentSans font-bold text-2xl text-left">
          Estás harto de que todo sea clases, trabajos, exámenes y poco más...
        </p>
      </div>
      <div
        ref={ref4}
        className={`flex mt-32 ${inView4 ? 'fade-in' : 'opacity-0'}`}
      >
        <p className="w-4/6 font-instrumentSans font-bold text-2xl text-left">
          No puedes encontrar ni potenciar las comunidades universitarias que
          siempre has soñado
        </p>
        <div className="w-2/6"></div>
      </div>
    </div>
  );
};

export default RoadMap;