import React from 'react'
import SupportIcon from "../assets/SupportIcon.png"
function HomeHeader() {
  return (
    <div className='flex flex-row  m-5'>
        <img className='h-10 w-10 ml-5' src={SupportIcon} alt="" />
      <h1 className='ml-5 text-2xl cursor-pointer text-'>SysSupport</h1>
      <div className='flex flex-row space-x-14 ml-auto mr-10'>
        <p className='cursor-pointer'>Features</p>
        <p className='cursor-pointer'>About</p>
        <p className='cursor-pointer'>Login</p>
        <button className=' rounded-2xl bg-green-500 px-4 h-7 animate-bounce mt-1 text-white hover:bg-green-800 cursor-pointer'>Sign up</button>
      </div>
    </div>
  )
}

export default HomeHeader
