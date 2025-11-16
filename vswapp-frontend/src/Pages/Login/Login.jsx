import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();
      console.log("Login success:", data);
      localStorage.setItem("token", data.token); 
      localStorage.setItem("userId", data.userId); 

      navigate("/skill");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed: " + err.message);
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
        <h2 className="text-3xl font-base mb-6 text-left">Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-12 text-sm"></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="w-full p-3 rounded-2xl bg-blue-900 border border-blue-900 focus:outline-none focus:border-blue-500 placeholder-white mb-4"
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
              className="w-full p-3 rounded-2xl bg-blue-900 border border-blue-900 focus:outline-none focus:border-blue-500 placeholder-white  mb-6"
            />
          </div>
          <button
            type="submit"
            className="mt-20 w-full bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-2xl font-medium"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-white">
          Not registered yet? <Link to="/signup" className="text-white hover:underline">Create an Account</Link>
        </p>
      </div>
    </div>
    <hr className="border-t-2 border-blue-500 w-full  mt-20" />
      <div className="mt-8 text-xs ml-12 text-gray-500 mb-5 ">© 2025 VSwapp. All rights reserved.{" "}
        <span style={{ marginLeft: "50rem" }}>Privacy Policy</span>
        <span className='ml-12'>Terms of Use</span>
      </div>
</div>

    
  )
}

export default Login