import React from "react";
import AuthBg from "../assets/AuthBg.webp";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import UseAuth from "../hooks/UseAuth.js";
function Login() {
  const navigate = useNavigate();
  const { setUser, setToken } = UseAuth();  // ✅ Ensure correct function call

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null); // ✅ State for error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Clear previous errors

    try {
   
      const res = await fetch("http://localhost:5000/api/user/login",  {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        setUser(data.user);
        setToken(data.token);
        navigate("/user");
        
      } else {
        setError(data.error);  // ✅ Show error message
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="">
      <img className="" src={AuthBg} alt="" />
      <div className="w-[500px] h-[600px] bg-white rounded-2xl absolute top-20 left-96">
        <h1 className="text-3xl font-bold text-center m-8 p-5">
          Welcome Back!
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form  onSubmit={handleSubmit} className="flex flex-col items-center justify-center " action="">
          <input
            className="border-gray-300 border-2 w-96 p-2 m-3 rounded-3xl"
            name="email"
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="border-gray-300 border-2 w-96 p-2 m-3 rounded-3xl"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="border-2 bg-green-500 text-white w-96 p-2 m-5 rounded-3xl hover:bg-green-700">
            Sign in
          </button>
        </form>
        <div className="flex flex-row ml-16 mt-5 gap-1">
          <p className="text-sm text-gray-400">Don't have an account? </p>
          <Link to="/signup">
            <a
              className="text-sm hover:underline text-green-500 "
              href="loaclhost/signup"
            >
              Sign up
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
