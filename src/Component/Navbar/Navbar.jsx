import React from 'react';
import { MdOutlineWhatshot } from 'react-icons/md';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className='h-[80px] w-full bg-white flex items-center'>
      <div className='flex flex-wrap items-center justify-between w-full container mx-auto px-4'>
        {/* Logo Section */}
        <div className='flex items-center space-x-2'>
          <img src="https://i.postimg.cc/pTXVKpBv/logo.png" alt="Logo" className='h-[45px]' />
          <div className='flex flex-col leading-tight'>
            <p className='text-green-500 text-2xl lg:text-4xl font-bold'>Nest</p>
            <p className='text-black text-[8px] lg:text-[10px]'>MART & GROCERY</p>
          </div>
        </div>

        {/* Hot Deals */}
        <div className=' lg:flex items-center space-x-2 pl-0 text-green-500 text-xl'>
          <MdOutlineWhatshot />
          <p className='text-black'>Hot Deals</p>
        </div>

        {/* Menu Links */}
        <div className=' lg:flex items-center text-black space-x-3 lg:space-x-6 text-sm lg:text-base lg:pt-0 pt-2'>
          <Link to="/About">About</Link>
          <a href="">Shop</a>
          <a href="">Mega Menu</a>
          <a href="">Vendors</a>
          <a href="">Blog</a>
          <a href="">Pages</a>
          <a href="">Contact</a>
        </div>

        {/* Login Button */}
        <div className='hidden lg:flex items-center'>
          <button className='text-white px-5 py-2 bg-green-500 rounded-md'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;