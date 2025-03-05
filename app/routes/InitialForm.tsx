import React from 'react';
import DarkLogo from '../assets/hero/dark-logo.png';

const InitialForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-8">
      <h2 className="text-5xl font-montserratAlt font-normal text-center mb-8">
        No dejes que <span className="font-bold"> la mejor</span>
        <br />
        etapa de tu vida{' '}
        pase <span className="font-bold underline text-[#769AFF]">de largo</span>
      </h2>
      <div className="flex items-center">
      <form 
          className="flex items-center" 
          onSubmit={async (e) => {
            e.preventDefault();
            const email = e.target.elements.email.value;
            try {
              const response = await fetch('https://script.google.com/macros/s/AKfycbymk_o7QJ8s3u3D4ls5XcFXcS8W0mk7Xp6wr0vmTlJSK_JgId8bx2-dC4qtclOLPzrNYg/exec', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' }, // Use JSON explicitly
                body: JSON.stringify({ email }),
              });
              if (response.ok) {
                alert('Thank you for subscribing!');
              } else {
                console.error('Server error:', await response.text());
                alert('Error submitting form.');
              }
            } catch (error) {
              console.error('Network error:', error);
              alert('Network error. Please try again.');
            }
          }}
        
        >
        <input
          type="email"
          name="email"
          placeholder="Acepta el reto y apunta tu correo..."
          className="w-full max-w-md px-6 py-3 rounded-xl bg-[#769AFF]/30 text-[#919191] font-instrumentSans focus:outline-none text-lg"
        />
        <button type="submit" className="ml-4">
          <img
            src={DarkLogo}
            alt="Send"
            className="w-16 h-16 hover:scale-125 transition-transform"
          />
        </button>
        </form>
      </div>
    </div>
  );
};

export default InitialForm;