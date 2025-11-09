import React, { useState } from 'react';
import Data1 from "../../ShopData/FeatureCategories.json";
import FcCart from './FcCart';


const FeaturedCategories = () => {
    const [data, setData] = useState(Data1)
    return (
        <div>
            <div className='container mx-auto pt-5'>
                <div>
                    <p className='flex justify-start text-lg text-black font-black'>Featured Categories</p>
                </div>
                <div className='grid grid-cols-10 gap-5'>
                    {data.map((p) => (
                        <FcCart FeaturedCategoriesData={p} key={p.id}></FcCart>
                    ))}

                   
                </div>
            </div>
        </div>
    );
};

export default FeaturedCategories;