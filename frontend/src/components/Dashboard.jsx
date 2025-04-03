import React from 'react';
import { MdRateReview } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import NavIP from './NavIP';
import IpHeader from './IpHeader';
import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <NavIP />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <IpHeader />

        {/* Dashboard Title */}
        <h1 className="text-xl font-bold  text-center -ml-[600px] mt-32">Dashboard</h1>

        {/* Card Container */}
        <div className="flex justify-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full px-5">
            
            {/* View All Tickets */}
            <div className="ml-20 h-44 w-full rounded-2xl bg-gray-50 shadow-2xl p-5 flex flex-col  text-xl">
              <h1 className="text-xl font-bold">View all Tickets</h1>
              <MdRateReview className="h-12 w-12 mt-5 text-green-500" />
              <p className="mt-3 text-lg">All tickets</p>
            </div>

            {/* Add New Tickets */}
            <div className="ml-20 h-44 w-full rounded-2xl bg-gray-50 shadow-2xl p-5 flex flex-col text-xl">
              <h1 className="text-xl font-bold">Add New Ticket</h1>
              <Link to = "/user/addticket">
              <IoIosAddCircleOutline className="h-12 w-12 mt-5 text-green-500" />
              </Link>
              <p className="mt-3 text-lg">Add new tickets</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
