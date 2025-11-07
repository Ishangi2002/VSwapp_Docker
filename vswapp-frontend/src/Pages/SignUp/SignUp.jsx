import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSignUp = async (e) => {
  e.preventDefault();
  try {
     const [first, last] = name.split(" ");
    const res = await fetch("http://localhost:8080/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({firstname: first || "",lastname: last || "",  name, email, password }),
    });

    if (!res.ok) throw new Error(await res.text());

    const data = await res.json();
    console.log("Signup success:", data);
    
    alert("Account created successfully!");

    navigate("/login"); 

  } catch (err) {
    console.error("Signup failed:", err);
    alert("Signup failed: " + err.message);
  }
};

  return (
<div className=" bg-gradient-to-b from-[#090e2d] to-[#111827] min-h-screen text-white">
    <div className="ml-10 py-10 " >
            <span className="font-bold text-5xl text-blue-500 ">V</span>
            <span className="font-medium text-3xl text-white">Swapp</span>
    </div>

<div className="flex items-center justify-center min-h-screen">
      <div className="bg-blue-950 text-white p-8 rounded-3xl shadow-lg w-[500px] h-[450px]">
        <h2 className="text-3xl font-base mb-6 text-left">SignUp</h2>
        <form onSubmit={handleSignUp} className="space-y-5">

        <div>
            <label htmlFor="name" className="block mb-10 text-sm"></label>
            <input
              type="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
              className="w-full p-3 rounded-2xl bg-blue-900 border border-blue-900 focus:outline-none focus:border-blue-500 placeholder-white "
            />
        </div>

          <div>
            <label htmlFor="email" className="block mb-5 text-sm"></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="w-full p-3 rounded-2xl bg-blue-900 border border-blue-900 focus:outline-none focus:border-blue-500 placeholder-white "
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-sm "></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-full p-3 rounded-2xl bg-blue-900 border border-blue-900 focus:outline-none focus:border-blue-500 placeholder-white "
            />
          </div>
          <button
            type="submit"
            className="mt-20 w-full bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-2xl font-medium"
          >
            Create Account
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-white">
          Already have an Account? <Link to="/login" className="text-white hover:underline">Login</Link>
        </p>
      </div>
    </div>
    <hr className="border-t-2 border-blue-500 w-full  mt-20 " />
      <div className="mt-8 text-xs ml-12 text-gray-500 mb-5 ">© 2025 VSwapp. All rights reserved.{" "}
        <span style={{ marginLeft: "50rem" }}>Privacy Policy</span>
        <span className='ml-12'>Terms of Use</span>
      </div>
</div>

    
  )
}

export default SignUp