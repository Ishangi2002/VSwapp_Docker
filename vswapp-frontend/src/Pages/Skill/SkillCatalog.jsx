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

  // Robust helper to fix image paths
  const getImageUrl = (path) => {
    if (!path) return "";
    
    // 1. If it contains localhost, swap it for the EC2 IP
    if (path.includes("localhost:8080")) {
      return path.replace("http://localhost:8080", BASE_URL);
    }
    
    // 2. If it's already a full URL (like from your IP), return it
    if (path.startsWith("http")) {
      return path;
    }
    
    // 3. If it's a relative path, prepend the BASE_URL
    return `${BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
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
        <div className="text-3xl text-center text-white">
          <h4>Skills Catalog</h4>
          <hr className="w-[80px] border-t-2 border-blue-500 mx-auto mt-3" />
        </div>

        <div className="flex ml-24 mt-8 gap-8">
          <div className="bg-indigo-950 text-white p-8 rounded-3xl shadow-lg w-[350px] h-[650px] flex-shrink-0">
            <FilterBox
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedLevels={selectedLevels}
              setSelectedLevels={setSelectedLevels}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="bg-indigo-950 text-white rounded-3xl shadow-lg w-[320px] h-[250px] flex flex-col justify-between"
              >
                <img
                  src={getImageUrl(skill.imagePath)}
                  alt={skill.title}
                  className="w-full h-[180px] rounded-3xl object-cover"
                  onError={(e) => {
                    // Avoid external placeholder if DNS is failing
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/320x180?text=Image+Not+Found";
                    // If even that fails, you might want to use a local asset import
                  }}
                />
                <div className="flex justify-between items-center px-4 py-2 ">
                  <span className="text-base">{skill.title}</span>
                  <Link to="/contact">
                    <span className="text-base cursor-pointer hover:text-blue-400">Join</span>
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