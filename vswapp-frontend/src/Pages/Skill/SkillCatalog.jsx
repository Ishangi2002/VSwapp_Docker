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

  /**
   * Helper to format image URLs correctly.
   * Returns null if no path exists to prevent browser console warnings.
   */
  const getImageUrl = (path) => {
    if (!path) return null; // Fix: return null instead of ""
    
    if (path.includes("localhost:8080")) {
      return path.replace("http://localhost:8080", BASE_URL);
    }
    return path.startsWith("http") ? path : `${BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
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
    <section className="py-16">
      <div className="bg-gradient-to-b from-[#090e2d] to-[#111827] min-h-screen text-white">
        <div className="text-3xl text-center">
          <h4>Skills Catalog</h4>
          <hr className="w-[80px] border-t-2 border-blue-500 mx-auto mt-3" />
        </div>

        <div className="flex ml-24 mt-8 gap-8">
          {/* Sidebar Filter */}
          <div className="bg-indigo-950 p-8 rounded-3xl shadow-lg w-[350px] h-[650px] flex-shrink-0">
            <FilterBox
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedLevels={selectedLevels}
              setSelectedLevels={setSelectedLevels}
            />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredSkills.map((skill) => {
              const imageUrl = getImageUrl(skill.imagePath);

              return (
                <div
                  key={skill.id}
                  className="bg-indigo-950 rounded-3xl shadow-lg w-[320px] h-[250px] flex flex-col justify-between overflow-hidden"
                >
                  <div className="w-full h-[180px] bg-gray-800">
                    {/* Fix: Only render img tag if imageUrl is not null */}
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={skill.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "https://placehold.co/320x180?text=Skill+Image";
                        }}
                      />
                    ) : (
                      // Placeholder while loading or if image is missing
                      <div className="w-full h-full flex items-center justify-center text-gray-500 italic">
                        No Image Available
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center px-4 py-3 bg-indigo-900/50">
                    <span className="text-base font-medium">{skill.title}</span>
                    <Link to="/contact">
                      <span className="text-base cursor-pointer text-blue-400 hover:text-blue-300 transition-colors">
                        Join
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCatalog;