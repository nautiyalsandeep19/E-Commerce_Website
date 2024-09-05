import React from 'react'
import {assets} from "../assets/frontend_assets/assets"
// imported inside the Home.jsx
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-500'>
        {/* left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-gray-500">
            <div className='flex items-center gap-2'>
                <p className='w-7 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font-normal text-sm md:text-base'>Our BestSeller</p>
            </div>
            <h1 className='poppins-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrival</h1>

            <div className='flex items-center gap-2'>
                <p className="font-semibold text-sm md:text-base">Shop Now</p>
                <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
        </div>
        </div>
        {/* Right side */}
        <img className='w-full sm:w-1/2 ' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero