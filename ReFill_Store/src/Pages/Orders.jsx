import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title';

const Orders = () => {

  const {products , currency }=useContext(ShopContext);
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"}/>
      </div>

      <div >
      {
        products.slice(1,4).map((item,index)=>(
          <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 text-base text-slate-500'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity:</p>
                    <p>Size:</p>
                  </div>
                  <p className='text-slate-500'>Date : 01/07/2024</p>
                </div>
              </div>
              <div className='justify-between md:w-1/2 flex'>
                <div className='items-center flex gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-400'></p>
                <p >Ready to ship</p>
                </div>
                
                <button className='border px-4 py-2 text-pretty bg-slate-200 active:bg-slate-400 '>Track Order</button>
              </div>
              
              
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Orders