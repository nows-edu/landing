import React from 'react';

const BigForm = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-xl border border-[#0A0D17]/5 bg-white p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold font-inter text-[#A89BF6]">
          Lets connect constelations
        </h2>
        <p className="font-inter text-[#A89BF6]">
          Let's align our constellations! Reach out and let the magic of
          collaboration illuminate our skies
        </p>
        <form 
          className="mt-8" 
          onSubmit={(e) => {
            e.preventDefault();
            const formData = {
              firstName: e.target.elements.firstName.value,
              lastName: e.target.elements.lastName.value,
              email: e.target.elements.email.value,
              phone: e.target.elements.phone.value,
              message: e.target.elements.message.value,
            };
            fetch("https://script.google.com/macros/s/AKfycbxyS7JsZ5pd51PbaVs_LEe3zpmSS-Fn9vk0G_P_4AyMCN40AMqJMVH-mSnmqs9QtxLxhA/exec", {
              method: 'POST',
              headers: { 'Content-Type': 'text/plain' },
              body: JSON.stringify(formData),
            })
            .then(() => alert('Message sent successfully!'))
            .catch(() => alert('Error sending message.'));
          }}
          >
          <div className="flex space-x-4">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-1/2 px-4 py-2 rounded-lg border border-[#393939]/20 bg-[#858585]/5 text-[#333333]/60 font-inter focus:outline-none"
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-1/2 px-4 py-2 rounded-lg border border-[#393939]/20 bg-[#858585]/5 text-[#333333]/60 font-inter focus:outline-none"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full mt-4 px-4 py-2 rounded-lg border border-[#393939]/20 bg-[#858585]/5 text-[#333333]/60 font-inter focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full mt-4 px-4 py-2 rounded-lg border border-[#393939]/20 bg-[#858585]/5 text-[#333333]/60 font-inter focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full mt-4 px-4 py-2 rounded-lg border border-[#393939]/20 bg-[#858585]/5 text-[#333333]/60 font-inter focus:outline-none h-32"
          />
          <button
            type="submit"
            className="w-full mt-8 bg-[#5956E9] text-white font-bold font-inter py-3 rounded-lg hover:bg-[#3936D9] transition-colors"
          >
            Send it to the moon
          </button>
        </form>
      </div>
    </div>
  );
};

export default BigForm;