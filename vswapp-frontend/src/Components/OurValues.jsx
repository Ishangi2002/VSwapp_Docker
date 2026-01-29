import React from 'react';

const OurValues = () => {
  const values = [
    { name: "Exchange", desc: "Mutual exchange of knowledge and experience between participants.", icon: "🔁" },
    { name: "Community", desc: "Creating a global network of like-minded people.", icon: "🌐" },
    { name: "Growth", desc: "Continuous development and improvement of skills.", icon: "🌱" },
  ];

  return (
    <section className="py-20 px-6 bg-[#0a0b10]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Our Values
        </h2>
        
        {/* Grid Container: Cleaned up spacing for better responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {values.map((value, i) => (
            <div
              key={i}
              className="group relative bg-[#1a1c23] w-full max-w-sm h-64 p-8 rounded-3xl border border-gray-800 
                         flex flex-col items-center text-center justify-center transition-all duration-500 ease-in-out
                         hover:-translate-y-2 hover:border-green-500/50 
                         hover:shadow-[0_20px_40px_rgba(34,197,94,0.1)]"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />

              {/* Icon Animation: Pulses slightly */}
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                {value.icon}
              </div> 

              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors">
                {value.name}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed px-4">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValues;