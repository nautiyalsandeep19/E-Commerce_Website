import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='w-32 mb-5' alt="" />
                <p className='w-full md:w-2/3 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum numquam tempora dicta voluptatum architecto possimus, facere excepturi accusantium impedit quidem dolore suscipit voluptates labore quisquam minus qui a nihil!</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 '>Company</p>
                  <ul className='flex flex-col gap-1 text-gray-400'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                  </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-1 text-gray-400'>
                    <li>+91-7078117069</li>
                    <li>underratedbard14@gmail.com</li>
                    <li>https://github.com/nautiyalsandeep19</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer