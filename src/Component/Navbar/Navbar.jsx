import React from 'react';
import { MdOutlineWhatshot } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className='h-[80px] w-full bg-white flex items-center '>
            <div className='flex space-x-1 w-full container mx-auto'>
                <img src="https://i.postimg.cc/pTXVKpBv/logo.png" alt="Logo" className='h-[45px]' />
                <div className='flex flex-col '>
                    <p className='text-green-500 text-4xl '>Nest</p>
                    <p className='text-black text-[8.5px]'>MART & GROCERY</p>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex items-center pl-10 text-xl '>
                        <p className='text-green-500'><MdOutlineWhatshot /></p>
                        <p>Hot Deals</p>
                    </div>
                    <div className='text-lg flex items-center text-black space-x-6'>
                        <a href="">About</a>
                        <a href="">Shop</a>
                        <a href="">Mega Menu</a>
                        <a href="">Vendors</a>
                        <a href="">Blog</a>
                        <a href="">Pages</a>
                        <a href="">Contact</a>
                    </div>
                    <div className='flex items-center'>
                        <button className='text-white px-5 py-2 bg-green-500 rounded-md'>Login</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;