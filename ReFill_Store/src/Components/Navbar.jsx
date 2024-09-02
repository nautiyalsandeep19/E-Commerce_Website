import React, { useState } from 'react'
import {assets} from "../assets/frontend_assets/assets"
import { Link, NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
    const [visible , setVisible]=useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
       <Link to={"/"}><img src={assets.logo} className='w-35 h-14 ' alt="" /></Link> 

        <ul className='hidden sm:flex gap-5 text-base text-slate-500'>
        <NavLink to={"/"} className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-gray-400 hidden' />
        </NavLink>
        <NavLink to={"/collections"} className='flex flex-col items-center gap-1'>
            <p>Collection</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-gray-400 hidden' />
        </NavLink>
        <NavLink to={"/about"} className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-gray-400 hidden' />
        </NavLink>
        <NavLink to={"/contact"} className='flex flex-col items-center gap-1'>
            <p>Contact</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-gray-400 hidden' />
        </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
        <p className='text-2xl'>{<CiSearch/>}</p>
        <div className='group relative'>
            <p className='text-2xl'>{<FaUserAlt/>}</p>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
            </div>
        </div>


        <Link to={"/cart"} className='relative'>
        <p className='text-2xl'>{<FaShoppingCart/>}</p>
        <p className='absolute right-[-5px] -bottom-[-5px] w-4 text-center leading-4 rounded-full bg-black text-white'>0</p>
        </Link>
        <img src={assets.menu_icon} onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

        {/* SideBar For Small Screens */}
        <div className={`absolute  top-0 right-0 bottom-0 bg-white overflow-hidden transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-slate-400'>
                <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={()=>setVisible(false)}>
                    <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
                    <p>back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)}  to={"/home"} className="py-2 pl-6 border">Home</NavLink>
                <NavLink  onClick={()=>setVisible(false)} to={"/collections"} className="py-2 pl-6 border">Collections</NavLink>
                <NavLink onClick={()=>setVisible(false)}  to={"/about"} className="py-2 pl-6 border">About</NavLink>
                <NavLink onClick={()=>setVisible(false)}  to={"/contact"} className="py-2 pl-6 border">Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar