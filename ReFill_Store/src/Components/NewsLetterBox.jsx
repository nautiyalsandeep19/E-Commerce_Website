import React from 'react'

const NewsLetterBox = () => {

  const HandleSubmit=()=>{
    alert("\n Hey !!\n Thank You For Your Love & Support \n\n~Code With Sandeep")
    event.preventDefault();
  }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>subscribe now & get 50% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, consequatur?
        </p>
        <form className='w-full sm:1/2 md:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' onSubmit={HandleSubmit} >
            <input type="email" className='w-full sm:flex-1 outline-none ' id='formInput' name='formInput' placeholder='Enter Your email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form> 
    </div>
  )
}

export default NewsLetterBox