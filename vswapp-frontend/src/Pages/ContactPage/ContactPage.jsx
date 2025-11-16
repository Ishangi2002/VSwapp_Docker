import React,{useState,useEffect} from 'react'
import Navbar2 from '../../Components/Navbar2';
import { Link } from 'react-router-dom';
import { Footer } from '../../Components/Footer';
import axios from 'axios';

const ContactPage = () => {
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
      <Navbar2 user={user} />

      <div className='ml-40 mt-40'>
        <h2 className="text-lg mb-4 underline underline-offset-4">
          Your opinion matters to us
        </h2>
        <p className="mb-8 text-gray-300 text-sm">
          Fill out the form to send us a message. <br />
          We will contact you as soon as possible.
        </p>
        <div className="text-lg mt-16 space-y-8">
          <span className="block">🕑 Quick response within 24 hours</span>
          <span className="block">🎯 Protection of your data</span>
          <span className="block">🙌 Appreciate your interest</span>
        </div>
      </div>

      
      <div className="flex items-center ml-[700px] mt-[-350px]">
        <div className="bg-blue-950 text-white p-8 rounded-3xl shadow-lg w-[550px] h-auto">
          <h3 className="text-xl font-semibold mb-6 underline underline-offset-4">
            Contact Us
          </h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-[#2a2a4f] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#2a2a4f] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full bg-[#2a2a4f] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />

            <Link to='/'>
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-700 transition-colors w-full py-3 rounded-md text-white font-semibold flex items-center justify-center gap-2 mt-3"
            >🚀 Send
            </button>
            </Link>
            
          </form>
        </div>
      </div>
      < Footer />
    </div>
  );
};

export default ContactPage;
