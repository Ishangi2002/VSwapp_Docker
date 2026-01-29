import React, { useState, useEffect } from 'react';
import FilterBox from './FilterBox';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const SkillCatalog = () => {
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);

  // Hardcoded EC2 IP Address
  const BASE_URL = "http://43.205.199.30:8080";

  const getImageUrl = (path) => {
    if (!path) return "https://placehold.co/320x180/0f172a/64748b?text=No+Image";
    
    // Remove local development strings if they exist in the DB
    let cleanPath = path.replace("http://localhost:8080", "");
    
    // Ensure the path starts with a single slash
    const formattedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
    
    // Construct final URL pointing to EC2
    return `${BASE_URL}${formattedPath}`;
  };

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/skill`);
        setSkills(res.data);
        setFilteredSkills(res.data); 
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };
    fetchSkills();
  }, []);

  useEffect(() => {
    let filtered = skills;
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(skill => selectedCategories.includes(skill.category));
    }
    if (selectedLevels.length > 0) {
      filtered = filtered.filter(skill => selectedLevels.includes(skill.level));
    }
    setFilteredSkills(filtered);
  }, [selectedCategories, selectedLevels, skills]);

  return (
    <section className="bg-[#030712] min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Skills Catalog</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filter - Matching the Indigo/Blue theme */}
          <aside className="bg-[#0f172a] p-8 rounded-3xl border border-blue-900/30 shadow-xl w-full lg:w-[320px] h-fit">
            <FilterBox
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedLevels={selectedLevels}
              setSelectedLevels={setSelectedLevels}
            />
          </aside>

          {/* Skills Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="group bg-[#0f172a] rounded-3xl border border-blue-900/20 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 shadow-lg"
              >
                <div className="w-full h-[200px] overflow-hidden bg-slate-800">
                  <img
                    src={getImageUrl(skill.imagePath)}
                    alt={skill.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/320x180/1e293b/475569?text=Image+Not+Found";
                    }}
                  />
                </div>
                
                <div className="p-6 flex justify-between items-center">
                  <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {skill.title}
                  </span>
                  <Link to="/contact">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition-all text-sm font-medium shadow-md">
                      Join
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCatalog;