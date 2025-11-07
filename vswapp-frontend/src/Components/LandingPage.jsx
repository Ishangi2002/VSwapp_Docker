import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import TrendingSkills from "./TrendingSkills";
import { OurValues } from "./OurValues";
import CommunityFeedback from "./CommunityFeedback";
import { Footer } from "./Footer";



export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-[#090e2d] to-[#111827] min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <TrendingSkills />
      <OurValues />
      <CommunityFeedback />
      <Footer />
      
    </div>
  );
}
