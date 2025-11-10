import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const Cart = ({ TotalCart }) => {
  const { title, brand, price, label, discount_percent, img } = TotalCart;

  const numericPrice = parseFloat(price);

  function calculateOriginalPrice(price, discount_percent) {
    const originalPrice = (price * 100) / (100 - discount_percent);
    return originalPrice.toFixed(2);
  }

  const originalPrice = calculateOriginalPrice(numericPrice, discount_percent);



  return (
    <div className="min-h-[500px] w-full bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100">
      {/* Image Section */}
      <div className="relative">
        <img src={img} alt="Product" className="w-full h-64 object-cover" />
        {discount_percent && (
          <span className="absolute top-0  bg-red-500 text-white text-xs font-semibold px-8 py-3 rounded-br-4xl">
            -{discount_percent}%
          </span>
        )}

         {label && (
          <span className="absolute top-0 right-0  bg-green-500 text-white text-xs font-semibold px-8 py-3 rounded-bl-4xl">
            {label}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-2">
        <span className="text-xs text-gray-400">{brand}</span>
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-sm text-gray-300" />
          ))}
          <span className="text-xs text-gray-500 ml-2">1</span>
        </div>
        <p className="text-sm text-gray-500">By: {brand}</p>

        {/* Price & Cart */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex  justify-center items-center">
            <span className="text-green-600 font-bold lg:text-2xl text-xl pr-2">$ {numericPrice}</span>
            <span className="text-base text-gray-600 line-through">${originalPrice}</span>
            
           
          </div>
          <button className="cursor-pointer bg-green-200 hover:bg-green-300 text-green-700 px-4 py-1.5 rounded-md  flex justify-center items-center">
            <IoCartOutline className="pr-1 text-3xl" /> <p className='text-lg'>Add</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;