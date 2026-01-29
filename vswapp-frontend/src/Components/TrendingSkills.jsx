import React from "react";
import { Link } from "react-router-dom";

const TrendingSkills = () => {
  const skills = [
    { name: "Programming", desc: "Programming powers the digital world - from apps to AI.", icon: "💻" },
    { name: "Music", desc: "Music connects the world-fueling emotion, creativity and culture.", icon: "🎵" },
    { name: "Photography", desc: "Photography captures moments-turning memories into visual stories.", icon: "📷" },
    { name: "Drawing", desc: "Drawing brings ideas to life-turning imagination into visual art.", icon: "📐" },
  ];

  return (
   
    <section className="pt-0 px-6 text-center overflow-x-hidden">

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-white mb-16">Trending Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, i) => (
            <div
              key={i}
              /* Card background slightly lighter for contrast */
              className="group bg-[#0f172a] w-64 h-80 p-8 rounded-3xl border border-gray-800 
                         flex flex-col items-center justify-start transition-all duration-300 
                         hover:-translate-y-3 hover:scale-105 hover:border-blue-500 
                         hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]"
            >
              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{skill.name}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{skill.desc}</p>
              
              <div className="mt-auto w-full">
                <Link to="/skill">
                  <button className="w-full border border-gray-600 text-white px-4 py-2 rounded-full 
                                     transition-all duration-300 group-hover:bg-blue-600 group-hover:border-transparent">
                    Learn More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSkills;