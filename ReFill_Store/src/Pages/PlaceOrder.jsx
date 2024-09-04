import React from 'react'
import Title from '../Components/Title'
import TotalCartAmount from '../Components/TotalCartAmount'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const PlaceOrder = () => {
  
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-13 min-h-[80vh] border-t '>
      {/* ****** Left Side **********/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px] '>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
          </div>
          <div className='flex gap-3'>
            <input type="text" placeholder='First Name' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
            <input type="text" placeholder='Last Name' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
          </div>
          <input type="email" placeholder='Email Address' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Street' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
          <div className='flex gap-3'>
            <input type="text" placeholder='City' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
            <input type="text" placeholder='State' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
          </div>
          <div className='flex gap-3'>
            <input type="number" placeholder='Zipcode' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
            <input type="text" placeholder='Country' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
          </div>
          <input type="number" placeholder='Phone' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
      </div>

      {/*********** Right Side  ***********/}
      <div className='mt-10'>
        <div className='mt-8 min-w-80'>
          <TotalCartAmount/>
        </div>

        <div className='mt-12'>
          
          <Title text1={'PAYMENT'} text2={'METHOD '}/>
          {/* Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div className='flex items-center gap-3  border p-2 px-3 cursor-pointer'>
            <input type="radio" name="payment" id="" />
              <img src={assets.razorpay_logo} alt="" />
            </div>
            <div className='flex items-center gap-3  border p-2 px-3 cursor-pointer'>
              <input type="radio" name="payment" id="" />
              <img src={assets.stripe_logo} alt="" />
            </div>
            <div className='flex items-center gap-3  border p-2 px-3 cursor-pointer'>
            <input type="radio" name="payment" id="" />
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
           <Link to={"/orders"}><button className='bg-black text-white px-14 py-3 active:bg-slate-600'>PLACE ORDER</button></Link> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder