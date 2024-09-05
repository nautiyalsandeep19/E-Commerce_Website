import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title  text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-500'>
          <p>An e-commerce website is a digital platform that facilitates the buying and selling of products and services over the internet. It provides a user-friendly interface that allows customers to browse through a wide variety of items, compare prices, read reviews, and make purchases securely from the comfort of their homes.</p>
          <p>Typically, such a website integrates essential features like product catalogs, shopping carts, secure payment gateways, and order tracking systems. Additionally, an e-commerce site often includes customer support, personalized recommendations, and various promotional tools to enhance the shopping experience.</p>
          <b className='text-gray-600'>Our Mission</b>
          <p>Our mission is to create an innovative and seamless e-commerce platform that connects people with the products they love, while providing an exceptional shopping experience. We strive to empower both consumers and businesses by offering a user-friendly interface, secure transactions, and personalized services that meet the evolving needs of the digital marketplace.</p>
        </div>
      </div>

      <div className='text-4xl py-4 '>
        <Title  text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-500'>Quality assurance is a critical component of our e-commerce platform, ensuring that every aspect of our website meets the highest standards of functionality, security, and user experience. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-500'>Convenience is at the heart of our e-commerce platform, designed to make online shopping as effortless and enjoyable as possible. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional customer service:</b>
          <p className='text-gray-500'>Exceptional customer service is a cornerstone of our e-commerce platform, where we go above and beyond to meet and exceed customer expectations. </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About