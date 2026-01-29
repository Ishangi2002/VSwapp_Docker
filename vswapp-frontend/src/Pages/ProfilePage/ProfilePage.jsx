import React, { useEffect, useState } from "react";
import Navbar2 from "../../Components/Navbar2";
import profileBackground from "../../assets/Images/profileBackground.jpg";
import userImage from "../../assets/Images/user.jpg";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import axios from "axios";

export const ProfilePage = () => {
  const [skills, setSkills] = useState([]);
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const userId = localStorage.getItem("userId");  
  const token = localStorage.getItem("token");

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
      if (!userId || !token) {
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`${BASE_URL}/api/skill/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setSkills(response.data); 
      } catch (err) {
        setError("Failed to load skills");
      } finally {
        setLoading(false);
      }
    };

    const fetchUserDetails = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/user-details/by-user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
      } catch (err) {}
    };

    fetchSkills();
    fetchUserDetails();
  }, [userId, token]);

  // ... (handleDeleteUser and handleDelete logic remains same)

  return (
    <div className="bg-gradient-to-b from-[#090e2d] to-[#111827] min-h-screen text-white">
      <Navbar2 user={user} />
      {/* ... (Header Section remains same) ... */}
      
      <div className="flex items-center justify-center mt-20 mb-32">
        <div className="relative bg-blue-950 p-0 rounded-3xl w-[1280px] min-h-[700px] pb-32 shadow-lg">
          <p className="mt-8 ml-10 text-2xl">Published skills</p>
          <div className="flex flex-wrap ml-20 items-stretch gap-32 px-10 mt-10">
            {skills.map((skill) => (
              <div key={skill.id} className="flex flex-col border border-blue-900 bg-blue-950 rounded-3xl w-[450px] shadow-2xl min-h-[420px]">
                <span className="text-lg ml-6 mt-4 block">{skill.title}</span>
                <img
                  src={getImageUrl(skill.imagePath)} 
                  alt={skill.title}
                  className="w-full h-[250px] object-cover rounded-b-3xl mt-[10px]"
                  onError={(e) => { 
                    e.target.onerror = null; 
                    // Changed from userImage to a generic color block or placeholder
                    e.target.src = "https://placehold.co/450x250/090e2d/white?text=Skill+Image"; 
                  }}
                />
                <div className="ml-5 mt-5 flex-1"><span>{skill.about}</span></div>
                {/* ... (Buttons) ... */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};