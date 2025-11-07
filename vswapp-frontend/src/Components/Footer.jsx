import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
     <footer className="bg-blue-1000 py-10 px-6 text-center md:text-left text-gray-400 mt-20">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-30 ml-12">
        <div>
            <span className="font-bold text-5xl text-blue-500 ">V</span>
            <span className="font-medium text-3xl text-white">Swapp</span>
            <p className="text-white text-sm mt-5">Connecting through knowledge,<br/>
                grow through exchange,and thrive<br/>
                together.
            </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Navigation</h4>
          <hr className="w-[60px]  border-t-2 border-blue-500"></hr><br/>

          <ul className="text-sm space-y-1">
           <Link to="/">Home</Link><br/>
           <Link to="/">About Us</Link><br/>
           <Link to="/skill">Skills</Link><br/>
           <Link to="/contact">Contact Us</Link>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <hr className="w-[55px]  border-t-2 border-blue-500"></hr><br/>
          <p className="text-sm">📞 +94 716590650</p>
          <p className="text-sm mt-4">✉  VSwapp03@gmail.com</p>
        </div>
      </div>
    
      <hr className="border-t-2 border-blue-500 w-full  mt-20" />
      <div className="mt-4 text-xs text-gray-500 flex items-center justify-between px-12">
        <span>© 2025 VSwapp. All rights reserved.</span>
      <div className="flex space-x-6">
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
      </div>
</div>
    </footer>
  )
}
