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
    <section className="py-16 px-6 bg-[#030712]"> {/* Dark background to match your theme */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Trending Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group relative bg-[#1a1c23] w-64 h-80 p-8 rounded-3xl border border-gray-800 
                         flex flex-col items-center text-center transition-all duration-300 ease-out
                         hover:-translate-y-3 hover:scale-105 hover:border-blue-500 
                         hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]"
            >
              {/* Icon Animation: Jiggles slightly on hover */}
              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-blue-400">
                {skill.name}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {skill.desc}
              </p>

              {/* Push button to bottom */}
              <div className="mt-auto w-full">
                <Link to="/skill">
                  <button className="w-full border border-gray-600 text-white px-4 py-2 rounded-full 
                                     transition-all duration-300 
                                     group-hover:bg-blue-600 group-hover:border-transparent group-hover:shadow-lg">
                    Learn More  →
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