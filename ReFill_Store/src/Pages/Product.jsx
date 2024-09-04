import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from "../Components/RelatedProducts"

const Product = () => {

  const {productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState('');
  const [size,setSize]=useState('');

  const fetchProductData = async ()=>{
      products.map((item)=>{
        if(item._id === productId){
          setProductData(item);
          setImage(item.image[0]);
          return null;
        }
      })
  }

  useEffect(()=>{
    fetchProductData()
},[productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100'>
          
          {/* Product Data */}
       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          
          
          {/********************* Product Images *******************************/}

          <div className="flex-1 flex flex-col reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {
                productData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} alt="" className='w-25% sm:w-full sm:b-3 flex-shrink m-2' />
                ))
              }
            </div>
            <div className='w-full sm:w-[80%]'>
                <img src={image} alt="" className='w-full h-auto mt-5'/>
            </div>
          </div>

          {/********************* Product Info *******************************/}
          <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-5" />
                <img src={assets.star_icon} alt="" className="w-5" />
                <img src={assets.star_icon} alt="" className="w-5" />
                <img src={assets.star_dull_icon} alt="" className="w-5" />
                <p className='pl-2'>(159)</p>
              </div>
              <p className='mt-5 text-3xl font-medium '>{currency}{productData.price}</p>
              <p className='mt-4 text-slate-900 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {
                    productData.sizes.map((item,index)=>(
                      <button onClick={()=>setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 font-semibold ${item===size ? 'border-black' : ''}`}>{item}</button>
                    ))
                  }
                </div>
              </div>
              <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-500'>ADD TO CART</button>
                <hr className=' mt-8 sm:w-4/5'/>
                <div className='w-full mt-4'>
                  <p className='text-gray-500'>Cash On Delivery is available on this project</p>
                  <p className='text-gray-500'>Easy Return and exchange policy</p>

                </div>
          </div>
        </div>
        

        {/********** Description and Review Section **************/}
        <div className='mt-20'>
            <div className="flex">
              <b className='border px-5 py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm'>Reviews (159)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, facere? ipsum dolor sit amet consectetur adipisicing elit. Tempora similique dolores nobis atque culpa pariatur nesciunt ratione doloremque aliquam soluta?</p>
              <p>Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veritatis aperiam vel quaerat odio ullam, eaque incidunt facilis praesentium libero!ipsum dolor sit amet consectetur adipisicing elit. Tempora similique dolores nobis atque culpa pariatur nesciunt ratione doloremque aliquam soluta?</p>

            </div>
            
        </div>
         <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
  
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product