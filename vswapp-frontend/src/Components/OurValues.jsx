import React from 'react';

const OurValues = () => {
  const values = [
    { name: "Exchange", desc: "Mutual exchange of knowledge and experience between participants.", icon: "🔁" },
    { name: "Community", desc: "Creating a global network of like-minded people.", icon: "🌐" },
    { name: "Growth", desc: "Continuous development and improvement of skills.", icon: "🌱" },
  ];

  return (
    <section className="py-20 px-6 bg-[#12131a] text-center overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {values.map((value, i) => (
            <div
              key={i}
              className="group bg-[#1c1e26] w-full max-w-sm h-64 p-8 rounded-3xl border border-gray-800 
                         flex flex-col items-center justify-center transition-all duration-300
                         hover:-translate-y-2 hover:border-green-500/50 
                         hover:shadow-[0_20px_40px_rgba(34,197,94,0.1)]"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {value.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{value.name}</h3>
              <p className="text-gray-400 text-sm px-4">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;