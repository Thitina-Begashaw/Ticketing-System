import React from "react";
import SupportIcon from "../assets/SupportIcon.png";
import { Link } from "react-router-dom";
import UserIcon from "../assets/User1.png"
import UseAuth from "../hooks/UseAuth";
function IpHeader() {
  const {user} = UseAuth();
  return (
    <div>
       <div className="flex flex-row   w-full h-24 -mt-3   py-8 bg-white shadow-xl fixed border-l-teal-400  z-50  ">
            <img className="h-10 w-10 ml-10 " src={SupportIcon} alt="" />
            <a href="#">
              <h1 className="ml-5 text-2xl cursor-pointer font-bold">
          <span className="text-green-600">Sys</span>Support
        </h1>
      </a>
      <img className="ml-[800px]" src={UserIcon} alt="" />
      <h2 className=" ml-5 text-xl text-gray-500 ">{user?.name}</h2>
    </div>
    </div>
  )
}

export default IpHeader
