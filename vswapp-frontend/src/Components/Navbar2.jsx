import React from 'react'
import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";


export const Navbar2 = ({user}) => {
  return (
    <header className="bg-transparent text-white py-4 px-6 flex justify-between items-center">
      
          <div>
              <span className="font-bold text-5xl text-blue-500">V</span>
              <span className="font-medium text-3xl text-white">Swapp</span>
          </div>
      
            
            <nav className="hidden md:flex gap-20 text-base font-small border border-white-400 rounded-full p-4 mx-auto mt-4">
              <Link to="/" className="hover:text-blue-400 transition">Home</Link>
              <Link to="/" className="hover:text-blue-400 transition">About Us</Link>
              <Link to="/skill" className="hover:text-blue-400 transition">Skills</Link>
              <Link to="/contact" className="hover:text-blue-400 transition">Contact Us</Link>
           </nav>
      
          <Link to='/profilepage'>
          <div className="flex items-center gap-2 bg-blue-950 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition cursor-pointer mr-10 mt-6">
            <UserCircleIcon className="w-8 h-8 text-white" />
            <span className="font-medium">{user ? `${user.firstname} ${user.lastname}` : "Loading..."}</span> 
          </div> 
          </Link>
          
      </header>
  )
}
 export default Navbar2;