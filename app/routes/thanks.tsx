import React from 'react';

const ThanksPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-blue-500 text-white">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">¡Gracias por suscribirte!</h1>
        <p className="text-lg">Tu correo ha sido registrado exitosamente.</p>
        <a
          href="/"
          className="text-purple-300 underline hover:text-purple-500 transition-colors"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default ThanksPage;