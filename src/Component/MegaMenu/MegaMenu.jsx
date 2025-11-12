import React from 'react';
import MainCart from '../MainCart/MainCart';

const MegaMenu = () => {
    return (
        <div className='container mx-auto pt-5 pb-5'>
            <div className='flex justify-between'>
                <div className='text-black text-2xl font-bold'>
                    <p>Popular Products</p>
                </div>
                <div className='space-x-4 text-black text-base flex'>
                    <p>All</p>
                    <p>Baking material</p>
                    <p>Fresh Fruits</p>
                    <p>Vegetables</p>
                    <p>Milk & Dairies</p>
                    <p>Meats</p>
                </div>
            </div>

            <MainCart></MainCart>

        </div>
    );
};

export default MegaMenu;