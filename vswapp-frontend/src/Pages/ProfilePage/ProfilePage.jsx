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

  // Hardcoded Base URL for EC2 Deployment
  const BASE_URL = "http://43.205.199.30:8080";

  useEffect(() => {
    const fetchData = async () => {
      if (!userId || !token) {
        setError("User not authenticated. Please log in.");
        setLoading(false);
        return;
      }

      try {
        // Fetch skills and user details in parallel
        const [skillsRes, userRes] = await Promise.all([
          axios.get(`${BASE_URL}/api/skill/user/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get(`${BASE_URL}/api/user-details/by-user/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);

        setSkills(skillsRes.data);
        setUser(userRes.data);
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, token]);

  // Delete user account
  const handleDeleteUser = async () => {
    if (!window.confirm("Are you sure you want to delete your account?")) return;

    try {
      await axios.delete(`${BASE_URL}/api/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("User deleted successfully");
      localStorage.clear(); 
      window.location.href = "/"; 
    } catch (err) {
      console.error("Failed to delete user:", err);
      alert("Failed to delete user. Please try again.");
    }
  };

  // Delete individual skill
  const handleDelete = async (skillId) => {
    if (!window.confirm("Are you sure you want to delete this skill?")) return;

    try {
      await axios.delete(`${BASE_URL}/api/skill/${skillId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSkills((prev) => prev.filter((skill) => skill.id !== skillId));
    } catch (err) {
      console.error("Error deleting skill:", err);
      alert("Failed to delete skill.");
    }
  };

  // Submit feedback
  const handleAddFeedback = async () => {
    if (!feedbackText.trim()) {
      alert("Please enter feedback before submitting.");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/api/feedback`, 
        {
          comment: feedbackText,
          userId: userId
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Feedback submitted successfully!");
      setFeedbackText(""); 
    } catch (err) {
      console.error("Error submitting feedback:", err);
      alert("Failed to submit feedback.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#090e2d] to-[#111827] min-h-screen text-white">
      <Navbar2 user={user} />

      {/* Profile Header Section */}
      <div className="flex items-center justify-center mt-20 mb-24">
        <div className="relative bg-blue-950 p-0 rounded-3xl w-[1280px] h-[500px] shadow-lg">
          <img
            src={profileBackground}
            alt="profile background"
            className="w-full h-[300px] object-cover rounded-t-3xl mt-[-24px]"
          />

          <div className="absolute left-10 top-[200px]">
            <img
              src={userImage}
              alt="user"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-950"
            />
          </div>

          <div className="absolute top-[300px] right-5 flex space-x-3">
            <Link to="/editprofile">
              <button className="p-2 rounded-full hover:bg-blue-900 transition">
                <PencilSquareIcon className="w-6 h-6 text-white" />
              </button>
            </Link>
            <button className="bg-red-500 p-2 rounded-full hover:bg-red-700 transition" onClick={handleDeleteUser}>
              <TrashIcon className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="absolute left-10 top-[380px]">
            <h2 className="text-xl font-semibold"> 
              {user ? `${user.firstname} ${user.lastname}` : "Loading..."}
            </h2>
            <p className="text-white text-sm">{user?.email || ""}</p>
            <button 
              onClick={() => { localStorage.clear(); window.location.href="/login"; }} 
              className="text-white text-sm underline mt-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Published Skills Section */}
      <div className="flex items-center justify-center mt-20 mb-32">
        <div className="relative bg-blue-950 p-6 rounded-3xl w-[1280px] min-h-[500px] pb-32 shadow-lg">
          <p className="mt-8 ml-4 text-2xl font-bold">Published skills</p>
          <p className="ml-4 text-lg text-gray-400">{skills.length} skills found</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 px-4">
            {loading ? (
              <p>Loading your skills...</p>
            ) : error ? (
              <p className="text-red-400">{error}</p>
            ) : skills.length === 0 ? (
              <p>No skills published yet. Click the + to add one!</p>
            ) : (
              skills.map((skill) => (
                <div key={skill.id} className="flex flex-col border border-blue-900 bg-blue-900/30 rounded-3xl overflow-hidden shadow-2xl h-full">
                  <span className="text-lg p-4 font-semibold">{skill.title}</span>
                  {skill.imagePath ? (
                    <img src={skill.imagePath} alt={skill.title} className="w-full h-48 object-cover" />
                  ) : (
                    <div className="w-full h-48 bg-gray-800 flex items-center justify-center">No Image</div>
                  )}
                  <div className="p-4 flex-grow text-gray-300">{skill.about}</div>
                  <div className="flex justify-end p-4 space-x-2">
                    <Link to={`/updateskill/${skill.id}`}>
                      <button className="p-2 hover:bg-blue-800 rounded-full transition">
                        <PencilSquareIcon className="w-6 h-6 text-white" />
                      </button>
                    </Link>
                    <button className="bg-red-500 p-2 rounded-full hover:bg-red-700 transition" onClick={() => handleDelete(skill.id)}>
                      <TrashIcon className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <Link to="/addskill">
            <button className="absolute bottom-8 right-8 flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition text-4xl">
              +
            </button>
          </Link>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="flex flex-col items-center mb-32 px-4">
        <p className="text-xl mb-6 text-center">Let's build a better space together - drop your feedback anytime.</p>
        <div className="bg-blue-950 p-6 rounded-3xl w-full max-w-[1280px] shadow-lg">
          <textarea
            className="w-full p-4 rounded-lg text-white bg-blue-900/50 border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            rows="4"
            placeholder="Drop your feedback here..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>
          <button 
            onClick={handleAddFeedback} 
            className="w-full md:w-64 block mx-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition"
          >
            Submit Feedback
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;