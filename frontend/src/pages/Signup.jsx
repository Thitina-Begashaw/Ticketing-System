import AuthBg from "../assets/AuthBg.webp";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [error, setError] = useState(null); // ✅ State to store error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        setUser(data.user);
        setToken(data.token);
        navigate("/user");
        
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="relative flex justify-center items-center h-full">
      <img className="h-[800px]" src={AuthBg} alt="" />
      <div className="w-[500px] h-[700px] bg-white rounded-2xl absolute top-20 left-96">
        <h1 className="text-3xl font-bold text-center m-8 p-5">
          Create Your Account
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center "
          action=""
        >
          <input
            className="border-gray-300 border-2 w-96 p-2 m-3 rounded-3xl"
            name="name"
            type="text"
            value={formData.name}
            placeholder="Full Name"
            onChange={handleChange}
          />
          <input
            className="border-gray-300 border-2 w-96 p-2 m-3 rounded-3xl"
            name="email"
            type="text"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className="border-gray-300 border-2 w-96 p-2 m-3 rounded-3xl"
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            className="border-gray-300 border-2 w-96 p-2 m-3 rounded-3xl"
            name="confirmPassword"
            type="text"
            value={formData.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          <select
            className="border-gray-300 border-2 w-96 p-2 m-3 rounded-3xl text-gray-400"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="" disabled selected hidden>
              Select Role
            </option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
       
          <button type="submit" className="border-2 bg-green-500 text-white w-96 p-2 m-5 rounded-3xl hover:bg-green-700">
            Create Account
          </button>
         

        
        </form>
        <div className="flex flex-row ml-16 mt-5 gap-1">
          <p className="text-sm text-gray-400">Already have an account? </p>

          <Link to="/login">
            <a
              className="text-sm hover:underline text-green-500 "
              href="loaclhost/signup"
            >
              Sign in
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
