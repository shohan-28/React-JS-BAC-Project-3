import React, { useState } from 'react';
import Data2 from "../BlogSection/BlogData.json";
import BlogCart from './BlogCart';
import CategoryIcon from "../assets/images/category-1.svg fill.png";

const Blog = () => {
    const [BlogData, setBlogData] = useState(Data2);
    return (
        <div className='container mx-auto pt-10 pb-10 items-center'>

            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex text-2xl items-center text-black font-bold'>
                    <img src={CategoryIcon} alt="" className='h-[30px] pr-2'/>
                    <p> Recips Articles</p>
                </div>
                
                    <div className="flex flex-wrap items-center justify-end gap-4 p-6 bg-white shadow-md rounded-md ">
                        {/* Show Dropdown */}
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600 font-medium">Show:</span>
                            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50" selected>50</option>
                                <option value="100">100</option>
                            </select>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600 font-medium">Sort:</span>
                            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400">
                                <option value="featured" selected>Featured</option>
                                <option value="latest">Latest</option>
                                <option value="popular">Most Popular</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>
                    </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    BlogData.map((data) => (
                        <BlogCart BlogData={data}></BlogCart>
                    ))
                }
            </div>
        </div>
    );
};

export default Blog;