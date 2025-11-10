import React from 'react';
import Icon1 from "../../assets/images/icon-1.png";
import Icon2 from "../../assets/images/icon-2.png";
import Icon3 from "../../assets/images/icon-3.png";
import Icon4 from "../../assets/images/icon-4.png";
import Icon5 from "../../assets/images/icon-5.png";

const IconCart = () => {
    return (
        <div className='container mx-auto pt-5 pb-5'>
            <div className='grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4'>
                <div className='flex items-center bg-gray-100 rounded-xl px-2 py-4 space-x-2'>
                    <div className=''>
                        <img src={Icon1} alt="" className='w-full h-15' />
                    </div>
                    <div>
                        <p>Best prices & offers</p>
                        <p>Orders $50 or more</p>
                    </div>
                </div>

                <div className='flex items-center bg-gray-100 rounded-xs px-2 py-4 space-x-2'>
                    <div className=''>
                        <img src={Icon2} alt="" className='w-full h-15' />
                    </div>
                    <div>
                        <p>Free delivery</p>
                        <p>24/7 amazing services</p>
                    </div>
                </div>

                <div className='flex items-center bg-gray-100 rounded-xs px-2 py-4 space-x-2'>
                    <div className=''>
                        <img src={Icon3} alt="" className='w-full h-15' />
                    </div>
                    <div>
                        <p>Great daily deal</p>
                        <p>When you sign up</p>
                    </div>
                </div>

                <div className='flex items-center bg-gray-100 rounded-xs px-2 py-4 space-x-2'>
                    <div className=''>
                        <img src={Icon4} alt="" className='w-full h-15' />
                    </div>
                    <div>
                        <p>Wide assortment</p>
                        <p>Mega Discounts</p>
                    </div>
                </div>

                <div className='flex items-center bg-gray-100 rounded-xs px-2 py-4 space-x-2'>
                    <div className=''>
                        <img src={Icon5} alt="" className='w-full h-15' />
                    </div>
                    <div>
                        <p>Easy returns</p>
                        <p>Within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconCart;