import React, { useState,useEffect } from 'react';
import { Link,useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import addskill from '../../assets/Images/addskill.png';
import Navbar2 from '../../Components/Navbar2';

export const UpdateSkill = () => {

  const {id}=useParams();
  const navigate=useNavigate();

  const [title,setTitle]=useState("");
  const [category,setCategory]=useState("");
  const [level,setLevel]=useState("");
  const [about,setAbout]=useState("");
  //const [image,setImage]=useState("");
  const [preview, setPreview] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/skill/${id}`)
      .then((res) => {
        const skill = res.data;
        setTitle(skill.title || "");
        setCategory(skill.category || "");
        setLevel(skill.level || "");
        setAbout(skill.about || "");
        setPreview(skill.imageUrl|| null)
      })
      .catch((err) => console.error(err));
  }, [id]);

  //handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedSkill = {
      title,
      category,
      level,
      about,
      image: preview
    };

    try {
      await axios.put(`http://localhost:8080/api/skill/${id}`, updatedSkill);

      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput && fileInput.files[0]) {
        const formData = new FormData();
        formData.append("image", fileInput.files[0]);

        await axios.put(`http://localhost:8080/api/skill/${id}/image`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
      }
      navigate("/profilepage");
    } catch (error) {
      console.error("Error updating skill:", error);
    }
  };

  //display username in navbar
useEffect(() => {
  const userId = localStorage.getItem("userId");
  if (userId) {
    axios.get(`http://localhost:8080/api/user/${userId}`)
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }
}, []);

  return (
    <div className="bg-gradient-to-b from-[#090e2d] to-[#111827] min-h-screen text-white">
      <Navbar2 user={user} />
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-12 gap-10">

        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-[-30px]">
          <h1 className="text-6xl font-serif font-bold text-white">Share</h1>
          <p className="text-lg mt-2">your unique talents with the world by</p>
          <p className="text-lg">adding a new skill to your profile.</p>
          <img
            src={addskill}
            alt="addskill"
            className="mt-6 w-[1500px] h-[500px] ml-[-50px] scale-150"
          />
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleUpdate} className="w-full md:w-1/2 space-y-6">
          <div>
            <label className="block text-lg">Skill Title <span className="text-red-500">*</span></label>
            <input type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-indigo-950 text-white rounded-lg p-3 mt-2" />
          </div>

          <div>
            <label className="block text-lg">Skill Category <span className="text-red-500">*</span></label>
            <input type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-indigo-950 text-white rounded-lg p-3 mt-2" />
          </div>

          <div>
            <label className="block text-lg">Skill Level <span className="text-red-500">*</span></label>
            <input type="text"
            value={level}
            onChange={(e)=> setLevel(e.target.value)}
            className="w-full bg-indigo-950 text-white rounded-lg p-3 mt-2" />
          </div>

          <div>
            <label className="block text-lg">About <span className="text-red-500">*</span></label>
            <textarea
            value={about}
            onChange={(e)=>setAbout(e.target.value)}
            className="w-full bg-indigo-950 text-white rounded-lg p-3 mt-2 h-28 resize-none"></textarea>
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-lg text-white mb-2">
              Update Image <span className="text-red-500">*</span>
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full bg-indigo-950 text-white rounded-lg p-3 mt-2 
                file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 
                file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />

            {preview && (
              <div className="mt-4">
                <p className="text-white mb-1">Preview:</p>
                <img src={preview} alt="Preview" className="w-48 h-48 object-cover rounded-xl border" />
              </div>
            )}
          </div>

          {/* Submit Button */}
          
            <button type="submit" className="w-full bg-blue-800 hover:bg-indigo-800 text-white rounded-lg p-3 text-lg mt-4">
              Update
            </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSkill;
