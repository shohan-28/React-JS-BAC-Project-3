import React, { useContext } from 'react';
import { MdOutlineWhatshot } from 'react-icons/md';
import { Link, NavLink } from 'react-router';
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
            <p className='text-green-500 text-2xl lg:text-4xl font-bold'>Aladins</p>
            <p className='text-black text-[8px] lg:text-[10px]'>MART & GROCERY</p>
          </div>
        </div>

        {/* Hot Deals */}
        <div className=' lg:flex items-center space-x-2 lg:pr-45 text-green-500 text-xl'>
          <MdOutlineWhatshot />
          <p className='text-black'>Hot Deals</p>
        </div>

        {/* Menu Links */}
        <div className=' lg:flex items-center text-black space-x-3 lg:space-x-6 text-sm lg:text-base lg:pt-0 pt-2'>
          <Link to="/About">About</Link>
          <a href="">Shop</a>
          <Link to="/MegaMenu">Mega Menu</Link>
          <a href="">Vendors</a>
          <Link to="/Blog">Blog</Link>
          <a href="">Pages</a>
          <Link to="/Contact">Contact</Link>
        </div>

        {!user &&( <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-300 text-lg font-bold text-neutral-800">
          {user.email[0].toUpperCase()}
        </div>
        )}

        {/* Login Button */}
        <div className=' flex items-center'>
          <NavLink to="/Login">
            <button className='text-white px-5 py-2 bg-green-500 hover:bg-green-400 rounded-md cursor-pointer '>Login</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;