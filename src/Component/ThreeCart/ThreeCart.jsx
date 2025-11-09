import React from 'react';
import Alt from "../../assets/images/alt.png";
import Alt2 from "../../assets/images/alt_2.png";
import Alt3 from "../../assets/images/alt_3.png";
import { FaArrowRight } from 'react-icons/fa';

const ThreeCart = () => {
    return (

        <div className='flex justify-center items-center pb-5'>

            <div className='container mx-auto grid grid-cols-3 gap-6'>
                <div className='h-full w-full relative'>
                    <img src={Alt} alt="" className='h-[290px] ' />
                    <div className='flex flex-col absolute top-20 left-10 gap-4 w-[220px]'>
                        <p className='text-xl font-bold pb-10'>Everyday Fresh & Clean with Our Products</p>
                        <button className='bg-green-400 py-2 w-[120px] rounded-xs flex justify-center items-center gap-2 text-sm'>
                            Shop Now <FaArrowRight className='text-base' />
                        </button>
                    </div>
                </div>
                <div className='h-full w-full relative'>
                    <img src={Alt2} alt="" className='h-[290px] ' />
                    <div className='flex flex-col absolute top-20 left-10 gap-4 w-[220px]'>
                        <p className='text-xl font-bold pb-10'>Make your Breakfast Healthy and Easy</p>
                        <button className='bg-green-400 py-2 w-[120px] rounded-xs flex justify-center items-center gap-2 text-sm'>
                            Shop Now <FaArrowRight className='text-base' />
                        </button>
                    </div>
                </div>
                <div className='h-full w-full relative'>
                    <img src={Alt3} alt="" className='h-[290px] ' />
                    <div className='flex flex-col absolute top-20 left-10 gap-4 w-[220px]'>
                        <p className='text-xl font-bold pb-10'>The best Organic Products Online</p>
                        <button className='bg-green-400 py-2 w-[120px] rounded-xs flex justify-center items-center gap-2 text-sm'>
                            Shop Now <FaArrowRight className='text-base' />
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ThreeCart;