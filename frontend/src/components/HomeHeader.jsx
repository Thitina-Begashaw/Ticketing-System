import React from "react";
import SupportIcon from "../assets/SupportIcon.png";
import { Link } from "react-router-dom";

function HomeHeader() {
  // Function to scroll smoothly to the Features section
  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById("features-section");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-row   w-full h-20  -mt-8 py-8 bg-white shadow-lg fixed z-40  ">
      <img className="h-10 w-10 ml-5" src={SupportIcon} alt="" />
      <a href="#home">
        <h1 className="ml-5 text-2xl cursor-pointer font-bold">
          <span className="text-green-600">Sys</span>Support
        </h1>
      </a>
      <div className="flex flex-row space-x-14 ml-auto mr-10">
        <a href="#features">
          <p onClick={handleScrollToFeatures} className="cursor-pointer">
            Features
          </p>
        </a>
        <a href="#about">
          <p className="cursor-pointer">About</p>
        </a>
        <Link to="/login">
          <p className="cursor-pointer">Login</p>
        </Link>

        <Link to="/signup">
          <button className=" rounded-2xl bg-green-500 px-4 h-7 animate-bounce mt-1 text-white hover:bg-green-800 cursor-pointer">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeHeader;
