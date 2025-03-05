import React from 'react';
import Carol from '../assets/contacts/carol.png';
import Jan from '../assets/contacts/jan.png';

const ContactCard = ({ image, name }: { image: string; name: string }) => (
  <div className="text-center">
    <img
      src={image}
      alt={name}
      className="w-36 h-36 rounded-full object-cover mx-auto"
    />
    <p className="mt-4 text-lg font-semibold font-josefinSans">{name}</p>
  </div>
);

const Contacts = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-center text-2xl font-bold mb-16 font-montserratAlt">
          {/* TODO: Mirar porque no carga la fuente Montserrat Alternates */}
          Equipo Fundador
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactCard image={Carol} name="CAROLINA BUIL GARCÍA" />
          <ContactCard image={Jan} name="JAN GRAS SERRA" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;