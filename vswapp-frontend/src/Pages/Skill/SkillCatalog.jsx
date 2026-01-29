import React, { useState, useEffect } from 'react';
import FilterBox from './FilterBox';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const SkillCatalog = () => {
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const BASE_URL = "http://43.205.199.30:8080";

  const getImageUrl = (path) => {
    if (!path) return "";
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
      } catch (err) { console.error(err); }
    };
    fetchSkills();
  }, []);

  return (
    <section className="py-16">
      {/* ... (Filter logic) ... */}
      <div className="grid grid-cols-3 gap-8">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="bg-indigo-950 rounded-3xl w-[320px] h-[250px]">
            <img
              src={getImageUrl(skill.imagePath)}
              alt={skill.title}
              className="w-full h-[180px] rounded-3xl object-cover"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/320x180/090e2d/white?text=No+Image";
              }}
            />
            {/* ... (Footer) ... */}
          </div>
        ))}
      </div>
    </section>
  );
};