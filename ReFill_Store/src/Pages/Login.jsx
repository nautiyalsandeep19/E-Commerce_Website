import React, { useState } from 'react'

const Login = () => {

  const [currentState,setCurrentState]=useState('signup');

  const onSubmitHandler=async (event)=>{
    event.preventDefault();
  }

  return (
    <div className=''>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl '>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-700'/>
        </div>
       {currentState ==='login'?'': <input type="text" className='w-full px-3 py-2 border border-gray-700' placeholder='Name'  required/>}
        <input type="email" className='w-full px-3 py-2 border border-gray-700' placeholder='Email'  required/>
        <input type="password" className='w-full px-3 py-2 border border-gray-700' placeholder='Password' required />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot Your Password ?</p>
          {
            currentState === 'login' 
            ? <p className='cursor-pointer' onClick={()=>setCurrentState('signup')}>Create Account</p>
            : <p className='cursor-pointer' onClick={()=>setCurrentState('login')}>Login Here</p>
            
          }
        </div>
        <button className='bg-black text-white font-light  px-8 py-2 mt-4'>{ currentState === 'login' ? 'Sign In' :'Sign Up' }</button>
      </form>
    </div>
  )
}

export default Login