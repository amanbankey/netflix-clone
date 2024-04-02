import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import { MdOutlineArrowDropDown } from "react-icons/md";

const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <p className='text-left pl-3'> Question? Call 1-866-576-7894</p>
        <div>
    
         <div className='footer-cols flex flex-col m-3 text-left'>
            <ul className='underline'>
                <li >
                    <a href='#'> FAQ </a>
                </li>
                <li>
                    <a href='#'> Invertor relation </a>
                </li>
                <li>
                    <a href='#'> Corporate Information </a>
                </li>
                <li>
                    <a href='#'> Netflix original </a>
                </li>
            </ul>
            <ul className='underline'>
                <li>
                    <a href='#'> Help center </a>
                </li>
                <li>
                    <a href='#'> Jobs </a>
                </li>
                <li>
                    <a href='#'> Terms fo use </a>
                </li>
                <li>
                    <a href='#'> Contact us </a>
                </li>
            </ul>
            <ul className='underline'>
                <li>
                    <a href='#'> Account </a>
                </li>
                <li>
                    <a href='#'> Redeem gift cards </a>
                </li>
                <li>
                    <a href='#'> Privacy </a>
                </li>
                <li>
                    <a href='#'> Speed test </a>
                </li>
            </ul>
            <ul className='underline'>
                <li>
                    <a href='#'> Media Center </a>
                </li>
                <li>
                    <a href='#'> Buy gift cards </a>
                </li>
                <li>
                    <a href='#'> Cookie preference </a>
                </li>
                <li>
                    <a href='#'> Legal Notices </a>
                </li>
            </ul>
         </div>

         <div className=' mr-[65%] ml-[1%] '>
             <div className='my-8 '>
                 <button className='flex items-center rounded border-2 pb-2 text-white bg-zinc-700 text-md px-4 py-1 gap-2 '>English <MdOutlineArrowDropDown className='text-white  '/> </button>
             </div>
        
            <div className='  text-left my-8 ' >Netflix India  </div>
         </div>
        
         </div>
    </footer>
    </>
   
  )
}

export default Footer

