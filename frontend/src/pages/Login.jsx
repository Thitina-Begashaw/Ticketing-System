import React from 'react'
import AuthBg from "../assets/AuthBg.webp";
import SupportIcon from "../assets/SupportIcon.png";
function Login() {
  return (
    <div className=''>
      <img className='' src={AuthBg} alt="" />
      <div className='w-[500px] h-[600px] bg-white rounded-2xl absolute top-20 left-96'>
        <h1 className='text-3xl font-bold text-center m-8 p-5'>Welcome Back!</h1>
        <form className='flex flex-col items-center justify-center ' action="">
          <input className='border-gray-300 border-2 w-96 p-2 m-3 rounded-3xl' type="text" placeholder='Email'/>
          <input className='border-gray-300 border-2 w-96 p-2 m-3 rounded-3xl' type="text" placeholder='Password'/>
          <button className='border-2 bg-green-500 text-white w-96 p-2 m-5 rounded-3xl hover:bg-green-700'>Sign in</button>
          </form>
          <div className='flex flex-row ml-16 mt-5 gap-1'>
          <p className='text-sm text-gray-400'>Don't have an account? </p>
          <a className='text-sm hover:underline text-green-500 ' href="loaclhost/signup">Sign up</a>
          </div>
        
      </div>
    </div>
  )
}

export default Login
