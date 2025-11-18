import React, { useContext } from 'react';
import { MdOutlineWhatshot } from 'react-icons/md';
import { NavLink } from 'react-router';
import Blog from './../../BlogSection/Blog';
import Contact from './../../ContactSection/Contact';
import MegaMenu from './../MegaMenu/MegaMenu';
import Login from './../../Login';
import { UserContext } from '../../UserContext';

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='h-[80px] w-full bg-white flex items-center'>
      <div className='flex flex-wrap items-center justify-between w-full container mx-auto px-0'>
        {/* Logo Section */}
        <div className='flex items-center space-x-2'>

          <div className='flex flex-col leading-tight'>
            <p className='text-green-500 text-xl lg:text-4xl font-bold'>Aladins</p>
            <p className='text-black text-[8px] lg:text-[10px]'>MART & GROCERY</p>
          </div>
        </div>

        {/* Hot Deals */}
        <div className='lg:block hidden lg:flex items-center space-x-2 lg:pr-45 text-green-500 text-xl'>
          <MdOutlineWhatshot />
          <p className='text-black'>Hot Deals</p>
        </div>

        
        {/* Menu Links */}
        <div className='flex items-center text-black space-x-3 lg:space-x-6 text-base lg:text-lg lg:pt-0 pt-2'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-md transition 
                  ${isActive ? " text-red-500 "
                : "text-black hover:text-red-500"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/MegaMenu"
            className={({ isActive }) =>
               `rounded-md transition 
                  ${isActive ? " text-red-500 "
                : "text-black hover:text-red-500"}`
            }
          >
            Mega Menu
          </NavLink>

          <NavLink
            to="/Blog"
            className={({ isActive }) =>
               `rounded-md transition 
                  ${isActive ? " text-red-500 "
                : "text-black hover:text-red-500"}`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
               `rounded-md transition 
                  ${isActive ? " text-red-500 "
                : "text-black hover:text-red-500"}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/Contact"
            className={({ isActive }) =>
               `rounded-md transition 
                  ${isActive ? " text-red-500 "
                : "text-black hover:text-red-500"}`
            }
          >
            Contact
          </NavLink>


          {/* Login Button */}
          <div className=' flex items-center'>
            <NavLink to="/Login">
              <button className='text-white px-4 py-1.5 bg-green-500 hover:bg-green-400 rounded-md cursor-pointer '>Login</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;