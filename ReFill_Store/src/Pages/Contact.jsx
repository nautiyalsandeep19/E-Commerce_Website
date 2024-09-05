import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'>The Yoga Capital<br/>Rishikesh , Uttarakhand , 249204</p>
          <p className=' text-gray-500'>Mobile: +91-7078117069 <br /> underratedbard14@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Career at Forever</p>
          <p className='text-gray-500'>Learn More our teams and job openings.</p>
          <button className='border border-black text-lg px-8 py-4 text-sm hover:bg-gray-500 hover:text-white transition-all duration-1000'>Explore jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact