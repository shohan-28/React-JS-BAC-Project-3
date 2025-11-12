import React from 'react';

const BlogCart = ({ BlogData }) => {
    const {title, category, publishedDate, views, readingTime, img} = BlogData;
    return (
        <div>
            <div className="">
                <div className="flex flex-col justify-center items-center ">
                    {/* Image Section */}
                    <div className="h-full w-full">
                        <img
                            src={img} 
                            alt="Harissa Chickpeas with Whipped Feta"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="p-6 flex flex-col justify-center items-center">
                        <p className="text-xs text-gray-400 font-semibold uppercase mb-2">{category}</p>
                        <h1 className="text-lg font-bold text-gray-800 mb-4 text-center">
                           {title}
                        </h1>
                        

                        {/* Metadata */}
                        <div className="flex items-center text-xs text-gray-400 space-x-4 mb-6">
                            <span>{publishedDate}</span>
                            <span>{views}</span>
                            <span>{readingTime} read</span>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCart;


