import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';

const LatestCollection = () => {
    const{products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts]=useState([]);
    useEffect(()=>{
     setLatestProducts(products.slice(0,10));
    },[])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Latest'} text2={'Collection'}/>
            <p className='w-2/3 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Step into the world of effortless shopping with our newest collection! Our e-commerce platform brings you the best in fashion, electronics, home décor, and more. With a curated selection of the latest trends and timeless classics, we ensure there's something for everyone.
            </p>
        </div>
        {/* Rendring Products */}
        <div className='grid grid-cols-2 sm:grid-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
            {
                latestProducts.map((items,index)=>(
                <ProductItems key={index} id={items.id} image={items.image} name={items.name} price={items.price} />
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection