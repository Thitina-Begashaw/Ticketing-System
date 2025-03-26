import React from "react";
import SupportPic from "../assets/Support2.jpg";
function HomeBody1() {
  return (
    <div className=" bg-gray-100  h-screen shadow-sm mt-7">
      <div className="float-left mt-36 ml-20">
        <h1 className="font-bold text-3xl">
          Optimize Your Support with Our <br />
          Advanced Ticketing System
        </h1>
        <p className="text-gray-600 mt-5 text-xl ">
          Enhance efficiency with our intuitive support system. <br />
          Users can easily submit tickets, while administrators <br />
          seamlessly manage and track issues, ensuring <br /> streamlined
          operations and quicker resolutions.
        </p>
        <button className="bg-green-500 text-white hover:bg-green-800 border-2 px-4 py-2 mt-10 shadow-lg">
          Get Started
        </button>
      </div>

      <div className="w-[500px] h-64 float-right mr-20 ">
        <img className="mt-20 rounded-full shadow-xl" src={SupportPic} alt="" />
      </div>
    </div>
  );
}

export default HomeBody1;
