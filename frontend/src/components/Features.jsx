import React, { useState, useEffect } from "react";

function Features() {
  const features = [
    {
      title: "Easy Ticket Creation",
      description:
        "Users can quickly submit support tickets with essential details ensuring a smooth issue-reporting process.",
    },
    {
      title: "Automated Ticket Assignment",
      description:
        "Tickets are automatically assigned to the appropriate support agents based on priority, category, or workload, improving efficiency.",
    },
    {
      title: "Real-Time Status Tracking",
      description:
        "Users and support staff can monitor ticket progress with live updates, providing transparency and better issue resolution timelines.",
    },
    {
      title: "Multi-Channel Support",
      description:
        "Customers can submit tickets through various channels like email, chat, or a web portal, making it more accessible and user-friendly.",
    },
    {
      title: "Detailed Reporting & Analytics",
      description:
        "Gain insights into response times, resolution rates, and ticket trends to optimize support operations and enhance user satisfaction.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(""); // left or right

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setSlideDirection("left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
      setSlideDirection(""); // Reset animation
    }, 500);
  };

  const prevSlide = () => {
    setSlideDirection("right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? features.length - 1 : prevIndex - 1
      );
      setSlideDirection(""); // Reset animation
    }, 500);
  };

  return (
    <div
      className="bg-green-100 p-10 min-h-screen flex flex-col items-center "
      id="features"
    >
      <h1 className="text-3xl text-center font-extrabold mb-8">
        Key Features of a Ticketing System
      </h1>

      {/* Slideshow Container */}
      <div className="relative w-[800px] h-[350px] flex justify-center items-center overflow-hidden">
        {/* Feature Box with Full Left Slide Animation */}
        <div
          className={`bg-white border border-gray-300 rounded-2xl shadow-2xl p-10 text-gray-700 text-center w-full h-full flex flex-col items-center justify-center transform transition-transform duration-500 ${
            slideDirection === "left"
              ? "-translate-x-full opacity-0"
              : slideDirection === "right"
              ? "translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <h2 className="text-2xl font-bold text-green-700 mb-3 ">
            {features[currentIndex].title}
          </h2>
          <p className="text-xl text-gray-500">
            {features[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-4 mt-4">
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Features;
