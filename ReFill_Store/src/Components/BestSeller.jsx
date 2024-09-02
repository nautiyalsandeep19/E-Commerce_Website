import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const BestSeller = () => {
    const[bestSeller,setBestSeller]=useState([]);
    const {products}=useContext(ShopContext)

    useEffect(()=>{
       const bestProduct=products.filter((individualItem)=>(individualItem.bestseller));
       setBestSeller(bestProduct.slice(0,5));
    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={"Best"}text2={"Seller"}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            From fashion-forward apparel and cutting-edge electronics to home essentials and unique gifts, our best sellers are a reflection of what’s trending and what truly works. These top-rated items come with glowing reviews, ensuring you make confident and satisfying purchases every time.
             </p>
        </div>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gapy-6'>
            {
                bestSeller.map((item,index)=>(
                <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
            }

        </div>
    </div>
  )
}

export default BestSeller