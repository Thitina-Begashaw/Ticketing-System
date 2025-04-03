import React, { useState } from "react";
import IpHeader from "./IpHeader";
import NavIP from "./NavIP";

function AddTicket() {
  // Commented out until useTicket is properly imported
  // const { setTickets } = useTicket();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    if (!formData.title.trim() || !formData.description.trim()) {
      setError("Fields are required");
      return;
    }

    const token = localStorage.getItem("token"); // Retrieve token

    try {
      const res = await fetch("http://localhost:5000/api/ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ Add token here
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        //  setTickets(data)

        // Uncomment if using useTicket hook
        // setTickets(data);
        alert("Ticket successfully added! ✅"); // ✅ Simple success message
        setFormData({ title: "", description: "" }); // ✅ Reset form
        // navigate("/dashboard"); // ✅ Redirect to dashboard
      } else {
        setError(data.error || "Failed to create ticket");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Ticket creation error:", err);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <NavIP />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <IpHeader />
{/* Dashboard Title */}
<h1 className="text-xl font-bold  text-center -ml-[550px] mt-32 -mb-32">Add New Ticket</h1>
        {/* Form Container */}
        <div className="flex justify-center items-center min-h-screen">
          <form
            className="bg-white p-6 rounded-lg shadow-md w-[70%] ml-48"
            onSubmit={handleSubmit}
          >
            {/* Display Error Message */}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <label className="block text-lg font-medium mb-2" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter title"
              className="border p-2 rounded w-full mb-4"
              value={formData.title}
              onChange={handleChange}
            />

            <label
              className="block text-lg font-medium mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Enter description"
              className="border p-2 rounded w-full mb-4"
              value={formData.description}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTicket;
