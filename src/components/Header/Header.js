import React, { useState } from 'react'
import "./Header.css";
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom'

const Header = () => {
  
  return (
    <header className='showcase'>
      <div className=' showcase-top h-16d'>
          <img className='showcase-top ' src='https://i.ibb.co/r5krrdz/logo.png' />
          {/* <NavLink to='/login' className='showcase-top bg-red-600'>
            Log In
          </NavLink> */}
          <NavLink to='/signup' id='btn' className='showcase-top  bg-red-600 '>
             Sign Up
          </NavLink>
      </div>
      <div className='showcase-content '>
         <h1 className=''>
              Unlimited movies, Tv shows and more
         </h1>
         <p>Watch anywhere. Cancel anytimes</p>
         <NavLink to='/netflix-show' className=' btn-xl'>
             Watch Free for 30 days  {"  >  "}
             <i className='fas fa-chevron-right btn-icon'></i>
         </NavLink>

      </div>
          
    </header>
  )
}

export default Header