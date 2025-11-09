import React from 'react';

const FcCart = ({ FeaturedCategoriesData }) => {

    const { title, items, img } = FeaturedCategoriesData;


    return (
        <div className='py-5 '>
            <div className=' bg-blue-200 rounded-xl flex flex-col justify-center items-center py-3'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='text-center'>
                    <p className='text-base font-bold'>{title}</p>
                    <p>{items} items</p>
                </div>
            </div>
        </div>
    );
};

export default FcCart;