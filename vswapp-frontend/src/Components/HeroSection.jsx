import React from "react";
import homeImage from "../assets/Images/home.png";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <section className="text-center py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between ">
      <div className="md:w-1/2 mb-10">
        <p className=" text-lg text-gray-400 mb-10  border border-gray-400 rounded-full px-3 py-1 text-left w-max">✈️ Next-gen learning</p>
        <h1 className="mb-10 text-left">
          <span className="text-7xl font-medium text-blue-600">Connect. </span>{" "}
          <span className="text-7xl font-medium text-white ">Share.</span> <br/><br/>
          <span className="text-7xl font-small">L</span>{" "}
          <span className="text-7xl font-small text-blue-600">e</span>
          <span className="text-7xl font-small">v</span>{" "}
          <span className="text-7xl font-small text-blue-600">e</span>
          <span className="text-7xl font-small mr-6">l   </span>{"   "}
          <span className="text-7xl font-small">U</span>{" "}
          <span className="text-7xl font-small text-blue-600">p  </span>
          <span className="text-7xl font-small">.</span>
          
        </h1>
        <p className="text-base text-gray-400 mb-14 text-left">
          Unlock a new way to learn and grow by exchanging<br/>
          real skills with real people — anytime, anywhere.
        </p>

        <div className="flex gap-10 justify-center md:justify-start mb-10">
    <Link to="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800">Get Started</button>
    </Link>

    <Link to="/contact">
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black">Learn More</button>
    </Link>
        </div>
        <div className="mt-6 text-base flex gap-8 justify-center md:justify-start text-white ">
          <span>🔍 Discover</span>
          <span>🔄 Exchange</span>
          <span>🎨 Create</span>
        </div>
        <div className="absolute top-28 right-6">
            <img src={homeImage} alt="Home" className="w-[900px] md:w-[900px]" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
