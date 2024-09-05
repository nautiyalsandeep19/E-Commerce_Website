import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title';
import { assets } from '../assets/frontend_assets/assets';
import TotalCartAmount from '../Components/TotalCartAmount';
import { Link } from 'react-router-dom';

const Cart = () => {

  const {products , currency ,cartItem ,updateQuantity}=useContext(ShopContext);

  const [cartData,setCartData]=useState([])
  useEffect(()=>{
   const tempData=[];
   for(const items in cartItem){
    for(const item in cartItem[items]){
      if(cartItem[items][item] > 0){
        tempData.push({
          _id:items,
          size:item,
          quantity:cartItem[items][item]
        })
      }
    }
   }
   setCartData(tempData);
  },[cartItem])

  return (
    
    <div className='border-t pt-14'> 
    <div className='text-2xl mb-3'>
      <Title text1={"Your"}text2={"Cart"}/>
    </div>
    <div>
      {
        cartData.map((item,index)=>{
          const ProductData=products.find((product)=>product._id ===item._id);

         return(
          <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4rf_0.5fr_0.5fr] sm:grid-cols-[4rf_0.5fr_0.5fr]'>
            <div className='flex items-start gap-6'>
              <img src={ProductData.image[0]} className='w-16 sm:w-20' alt="" />
               <div>
                <p className='text-xs sm:text-lg font-medium'>{ProductData.name}</p>
                <div className='flex items-center gap-5 mt-2'>
                  <p>{currency}{ProductData.price}</p>
                  <p className='px-2 sm:px-3 sm:py-1 border bg-gray-100 font-base'>{item.size}</p>
                </div>
               </div>
              <input onChange={(e)=>e.target.value==='' || e.target.value==='0' ? null : updateQuantity(item._id ,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 m-auto ' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={()=>updateQuantity(item._id,item.size,0)} src={assets.bin_icon} className='w-4 m-auto sm:w-5 cursor-pointer' alt="" />           
            </div>
          </div>
         )
        })
      }
    </div>
        {/* MOUNTING THE CALCULATION SECTION OF CART */}
        <div className='flex justify-end my-20'>
          <div className=" w-full sm:w-[450px]">
            <TotalCartAmount/>
          <div className='w-full text-end'>
           <Link to={'/place-order'}><button className='bg-slate-900 text-white text-sm my-8 px-8 py-3 active:bg-slate-500'>PROCEED TO CHECKOUT</button></Link>   
          </div>
          </div>
        </div>
    </div>
    
  )
}

export default Cart