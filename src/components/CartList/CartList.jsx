import React from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import CartCap from "./CartCap";

import { IoReturnUpBackSharp } from "react-icons/io5";

export default function CartList({ items, isLoading }) {
  return (
    <>
      <CartCap />
      <Link
        to="/"
        className="inline-flex px-3 py-px items-center rounded-xl
        ml-0 sm:ml-10 lg:ml-20 xl:ml-40
        font-medium sm:font-semibold lg:font-bold 
        text-base sm:text-lg lg:text-xl
        bg-lime-700 text-green-200
      hover:bg-lime-200 hover:text-green-700 transition-all duration-350"
      >
        <IoReturnUpBackSharp className="mr-2" />
        Назад до головного меню
      </Link>
      <ul className="flex flex-col items-center      
      gap-3 sm:gap-4 lg:gap-6
      px-0 sm:px-10 lg:px-20 xl:px-40
      pt-4 lg:pt-10">
        {isLoading ? <h1>Loading...</h1> : <CartItem items={items} />}
      </ul>
      <div className="flex flex-wrap justify-between content-between py-4 
      px-0 sm:px-10 lg:px-20 xl:px-40                 
      ">
        <p className="py-2
        text-xl sm:text-2xl lg:text-3xl
        font-semibold sm:font-bold lg:font-extrabold         
        ">Вартість <br/>замовленн<span className="font-bold font-mono text-lg">’</span>я<span className="font-bold font-mono text-lg">:</span>
        <span className="font-bold font-mono text-3xl text-red-700 m-2">1275</span>грн<span className="font-bold font-mono text-lg">.</span>
        </p>
        <button type="button" className="block rounded-xl max-h-10 bg-lime-700 text-green-200 hover:bg-lime-200 hover:text-green-700        
        px-2 lg:px-3
        py-px lg:py-1
        text-lg sm:text-xl lg:text-2xl
        transition-all duration-350">Замовити</button>
      </div>
      
    </>
  );
}
