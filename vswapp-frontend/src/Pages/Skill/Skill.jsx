import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import SkillCatalog from './SkillCatalog';
import { HowToSuggestSkill } from './HowToSuggestSkill';
import { Footer } from '../../Components/Footer';
import Navbar2 from '../../Components/Navbar2';
import axios from 'axios';


export const Skill = () => {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/user-details/by-user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, [userId, token]);

  return (
        <div className="bg-gradient-to-b from-[#090e2d] to-[#111827] min-h-screen text-white">

    <div className="flex-1">
         < Navbar2  user={user}  /> 
         < SkillCatalog />
         < HowToSuggestSkill />
         
         
         
    </div>
  < Footer />
    </div>
  )
}

export default Skill