import React from 'react'

export const OurValues = () => {
    const values = [
    { name: "Exchange", desc: "Mutual exchange of knowledge and experience between participants.", icon: "🔁" },
    { name: "Community", desc: "Creating a global network of like - minded people.", icon: "🌐" },
    { name: "Growth", desc: "Continuous development and improvement of skills.", icon: "🌱" },
  ];

  return (
   <section className="py-8 px-6 text-center">
  <h2 className="text-4xl text-center text-white mb-30 mt-10">Our Values</h2>
  
  <div className="ml-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-30 place-items-center mt-10">
    
  
    {values.map((value, i) => (
      <div
        key={i}
        className="bg-gray-800 w-96 h-56 p-6 rounded-3xl hover:shadow-lg transition flex flex-col justify-center"
      >
        <div className="text-4xl mb-4">{value.icon}</div> 
        <h3 className="text-xl font-semibold mb-2 text-white">{value.name}</h3>
        <p className="text-gray-400 text-sm">{value.desc}</p>
      </div>
    ))}
  </div>
  
</section>
  )
}

export default OurValues;