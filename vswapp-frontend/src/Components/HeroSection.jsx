import React from "react";
import homeImage from "../assets/Images/home.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden px-4 md:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 z-10 text-left">
          <p className="inline-block text-sm md:text-lg text-gray-400 mb-8 border border-gray-700 rounded-full px-4 py-1 bg-gray-800/20">
            ✈️ Next-gen learning
          </p>
          
          <h1 className="mb-8 leading-tight">
            <span className="text-6xl md:text-7xl font-bold text-blue-600 block md:inline">Connect. </span>
            <span className="text-6xl md:text-7xl font-bold text-white block md:inline">Share.</span> 
            <br className="hidden md:block" />
            <div className="text-6xl md:text-7xl font-bold mt-4">
              <span>L</span><span className="text-blue-600">e</span><span>v</span><span className="text-blue-600">e</span><span>l</span>
              <span className="ml-6">U</span><span className="text-blue-600">p</span><span>.</span>
            </div>
          </h1>

          <p className="text-base md:text-lg text-gray-400 mb-10 max-w-md">
            Unlock a new way to learn and grow by exchanging<br className="hidden md:block"/>
            real skills with real people — anytime, anywhere.
          </p>

          <div className="flex gap-6 mb-12">
            <Link to="/login">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                Get Started
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-gray-500 text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all">
                Learn More
              </button>
            </Link>
          </div>

          <div className="flex gap-8 text-white/80 text-sm md:text-base font-medium">
            <span className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-default">🔍 Discover</span>
            <span className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-default">🔄 Exchange</span>
            <span className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-default">🎨 Create</span>
          </div>
        </div>

        {/* Right Side: Animated Illustration */}
        <div className="md:w-1/2 relative mt-16 md:mt-0 flex justify-center">
          {/* Background Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/20 blur-[100px] rounded-full animate-pulse -z-0" />
          
          {/* Floating Hero Image */}
          <img 
            src={homeImage} 
            alt="Vswapp Illustration" 
            className="w-full max-w-[600px] md:max-w-[750px] relative z-10 animate-float-slow" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;