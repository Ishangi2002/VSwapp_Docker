import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import LoginPage from "./Pages/Login/Login";
import SignUpPage from "./Pages/SignUp/SignUp";
import SkillPage from "./Pages/Skill/Skill";
import AddSkillPage from "./Pages/AddSkill/AddSkill";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import UpdateSkillPage from "./Pages/UpdateSkill/UpdateSkill";
import EditProfilePage from "./Pages/ProfilePage/EditProfilePage";
import ContactPage from "./Pages/ContactPage/ContactPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="/addskill" element={<AddSkillPage />} />
        <Route path="/updateskill/:id" element={<UpdateSkillPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/editprofile" element={<EditProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />


      </Routes>
    </Router>
  );
}
