import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-transparent text-white py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div>
        <span className="font-bold text-5xl text-blue-500">V</span>
        <span className="font-medium text-3xl text-white">Swapp</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-20 text-base font-small border border-white-400 rounded-full p-4">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/" className="hover:text-blue-400 transition">About Us</Link>
        <Link to="/skill" className="hover:text-blue-400 transition">Skill</Link>
        <Link to="/contact" className="hover:text-blue-400 transition">Contact Us</Link>
      </nav>

      <div className="flex gap-4">
        <Link to="/login">
          <button className="text-base text-white px-5 py-2 bg-blue-600 rounded-full hover:bg-blue-800 ">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="text-base text-white px-5 py-2 bg-transparent border border-white rounded-full hover:text-blue-600 transition">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
