import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../Components/Title';
import ProductItems from '../Components/ProductItems';

const Collections = () => {
  const {products,search,ShowSearch} = useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false);
  const [filterProducts,setFilterProducts ]=useState([])
  const[category,setCategory]=useState([]);
  const[subCategory,setSubCategory]=useState([]);
  const[sortType,setSortType]=useState('relevant')

  // Filtring The Category
  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  // Filtring The SubCategory
  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setSubCategory(previous=>[...previous,e.target.value])
    }
  }

  // Applying Filters on Both Categories and SubCategories
  const ApplyFilter=()=>{
    let productsCopy=products.slice();

    if(ShowSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category))
    }

    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }
    
    setFilterProducts(productsCopy)
  }

  //********** Sort the Products  ****************//
  const SortProduct =()=>{
    let filterProductCopy=filterProducts.slice();

    switch(sortType){
      case "low-high":
        setFilterProducts(filterProductCopy.sort((a,b)=>(a.price-b.price)));
        break;

        case "high-low":
        setFilterProducts(filterProductCopy.sort((a,b)=>(b.price-a.price)));
        break;

        default:
          ApplyFilter();
          break;
    }
  }

  useEffect(()=>{
    ApplyFilter()
  },[category,subCategory,search ,ShowSearch])

  useEffect(()=>{
    SortProduct();
  },[sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? "rotate-90":""}`} src={assets.dropdown_icon} alt=""/>
        </p>


         {/* Category Filter */}
         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-bold'>CATEGORIES</p>
           <div className='FLEX flex-col gap-2 text-sm font-light text-gray-500'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onClick={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onClick={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onClick={toggleCategory}/>Kids
            </p>
           </div>
         </div>
         {/* Subcategory filter */}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-bold'>TYPE</p>
           <div className='FLEX flex-col gap-2 text-sm font-light text-gray-500'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onClick={toggleSubCategory}/>TopWear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onClick={toggleSubCategory}/>BottomWear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onClick={toggleSubCategory}/>WinterWear 
            </p>
           </div>
         </div>
    </div>



  {/*************** Right Side *************/}
     <div className='flex-1'>
      <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <Title text1={'ALL'} text2={'COLLECTION'}/>
        {/* Product Sort */}
        <select className="border-2 border-slate-400 text-sm px-2" onChange={(e)=>setSortType(e.target.value)}>
          <option value="relavent">Sort By : relevant</option>
          <option value="low-high">Sort By : low to high</option>
          <option value="high-low">Sort By : high to low</option>
        </select>
      </div>

      {/* Map Products */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
      {
        filterProducts.map((item,index)=>(
          <ProductItems key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
        ))
      }
      </div>
     </div>

    </div>
  )
}

export default Collections