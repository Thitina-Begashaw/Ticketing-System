import React from 'react'
import { MdDashboard } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import UserIcon from "../assets/User3.png"
import UseAuth from '../hooks/UseAuth'
import { Link } from 'react-router-dom';
function NavIP() {
  const {user}=UseAuth();
  return (
    <div className='fixed w-60 h-full bg-green-400 text-white mt-20 py-7 flex flex-col items-center  '>
       <img className=" h-24 w-24  p-5" src={UserIcon} alt="" />
       <h1 className='text-gray-200 text-xl'>{user?.name}</h1>
       <p>{user?.email}</p>
       <hr className='w-52 mt-5' />
<div className='flex items-start justify-start flex-col -ml-20 cursor-pointer'>
       <div className='flex m-5  '>
       <MdDashboard className='h-6 w-6 ' />
       <Link to = "/user/dashboard" >
       <p className='ml-2 '>Dashboard</p>
       </Link>
       </div>

       <div className='flex m-5 '>
       <IoIosAddCircleOutline className='h-6 w-6 ' />
       <Link to = "/user/addticket" >
       <p className='ml-2 '>Add Tickets</p>
       </Link>
       </div>
     
       <div className='flex m-5 '>
       <FaList className='h-6 w-5 ' />
       <Link to = "/user/myticket" >
       <p className='ml-2 '>My Tickets</p>
       </Link>
       </div>

       <div className='flex m-5 '>
       <IoLogOutOutline className='h-6 w-5 ' />
       <p className='ml-2 '>Logout</p>
       </div>
</div>
    </div>
  )
}

export default NavIP