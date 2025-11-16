import React from "react";
import { Link } from "react-router-dom";

const TrendingSkills = () => {
  const skills = [
    { name: "Programming", desc: "Programming powers the digital world - from apps to AI.", icon: "💻" },
    { name: "Music", desc: "Music connects the world-fuelingemotion,creativity and culture.", icon: "🎵" },
    { name: "Photography", desc: "Photography captures moments-turning memories into visual stories.", icon: "📷" },
    { name: "Drawing", desc: "Drawing brings ideas to life-turning imagination into visual art.", icon: "📐" },
  ];

  return (
    <section className="py-8 px-6 text-center">
  <h2 className="text-4xl text-center text-white mb-16">Trending Skills</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 place-items-center">
  
    {skills.map((skill, i) => (
      <div
        key={i}
        className="bg-gray-800 w-64 h-80 p-6 rounded-3xl hover:shadow-lg transition flex flex-col justify-start"
      >
        <div className="text-4xl mb-4">{skill.icon}</div> 
        <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
        <p className="text-gray-400 text-sm">{skill.desc}</p>
        <Link to="/skill"><button className="border border-gray-500 text-white px-6 py-2 rounded-full hover:bg-blue-800 mt-8">Learn More  →</button></Link>

      </div>
    ))}
  </div>
  
</section>

  );
};

export default TrendingSkills;
