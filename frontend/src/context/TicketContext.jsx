import { createContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import UseAuth from "../hooks/UseAuth.js";
import axios from "axios";

const TicketContext = createContext();
const API_URL = "http://localhost:5000/api/ticket"; // ✅ Fixed API URL

export const TicketProvider = ({ children }) => {
  const { user, token } = UseAuth(); // ✅ Ensure we get both user and token
  const [tickets, setTickets] = useState([]);
  const [filterOpenTickets, setFilterOpenTickets] = useState([]);
  const [filterInprogressTickets, setFilterInprogressTickets] = useState([]);
  const [filterClosedTickets, setFilterClosedTickets] = useState([]);
  const [error, setError] = useState(null); // ✅ Added error state

  // Fetch tasks from the API
  useEffect(() => {
    console.log("User:", user);
    console.log("Token:", token);
    if (!token || !user || !user._id) return;

    axios
      .get(API_URL + `/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        // setLoading(false);
      });
  }, [token, user]);

  const addTicket = async (title, description) => {
    if (!token) return;

    try {
      const response = await axios.post(
        API_URL,
        { title: title, description: description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTickets((prevTickets) => [...prevTickets, response.data]);
    } catch (error) {
      console.error("Error adding ticket:", error);
    }
  };

  const deleteTicket = async (ticketId) => {
    if (!token) return;

    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!isConfirmed) return;

    try {
      await axios.delete(`${API_URL}/${ticketId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTickets((prevTickets) =>
        prevTickets.filter((ticket) => ticket._id !== ticketId)
      );
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  };

  const updateStatus = async (ticketId, currentStatus) => {
    if (!token) return;

    const isConfirmed = window.confirm(
      "You are changing the status to completed. Do you want to proceed?"
    );
    if (!isConfirmed) return;

    try {
      await axios.patch(
        `${API_URL}/${ticketId}`,
        { status: !currentStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTickets((prevTickets) =>
        prevTickets.map((ticket) =>
          ticket._id === ticketId
            ? { ...ticket, status: !currentStatus }
            : ticket
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        addTicket,
        deleteTicket,
        updateStatus,
        filterOpenTickets,
        filterInprogressTickets,
        filterClosedTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContext;
