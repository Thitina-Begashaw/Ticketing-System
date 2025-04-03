import { useContext } from "react";
import  TicketContext from "../context/TicketContext.jsx";
const UseTicket=()=>{
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }
  return context;
}
export default UseTicket;