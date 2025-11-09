import React, { useState } from 'react';
import Data from "../../ShopData/data.json";
import Cart from './Cart';


const MainCart = () => {
    const [card, setCard]= useState(Data);
    return (
        <div className='container mx-auto pt-10'>
            <div className='grid grid-cols-5 gap-4'>
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