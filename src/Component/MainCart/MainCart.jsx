import React, { useState } from 'react';
import Data from "../../ShopData/data.json";
import Cart from './Cart';


const MainCart = () => {
    const [card, setCard]= useState(Data);
    return (
        <div className='container mx-auto pt-10'>
            <div className='grid lg:grid-cols-5 grid-cols-1 lg:gap-4 gap-6'>
                {
                    card.map((p)=> (
                        <Cart TotalCart={p} key={p.id}></Cart>
                    ))
                }
            </div>
        </div>
    );
};

export default MainCart;