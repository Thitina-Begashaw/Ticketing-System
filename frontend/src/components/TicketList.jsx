import React, { useState, useEffect, useContext } from "react";
import IpHeader from "./IpHeader";
import NavIP from "./NavIP";
import UseTicket from "../hooks/UseTicket.js";

function TicketList() {
  const { tickets, setTickets, fetchUserTickets } = UseTicket();
  console.log(tickets);
  const [error, setError] = useState(null);

  return (
    <div className="flex">
      {/* Sidebar */}
      <NavIP />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <IpHeader />

        {/* Title */}
        <h1 className="text-xl font-bold text-center mt-10">My Tickets</h1>

        {/* Display Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Ticket List */}
        <div className="ml-20 mt-5 space-y-4 w-full max-w-4xl mx-auto">
          {tickets?.length > 0 ? (
            <ul className="grid grid-cols-2 gap-10">
              {tickets.map((ticket) => (
                <li
                  key={ticket._id}
                  className="p-5 bg-gray-50 shadow-lg rounded-2xl"
                >
                  <h2 className="text-2xl font-bold">{ticket.title}</h2>
                  <p className="text-lg text-gray-600">{ticket.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No tickets found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TicketList;
