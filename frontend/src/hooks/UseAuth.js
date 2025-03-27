import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
const UseAuth=()=>{
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }
  return context;
}
export default UseAuth;