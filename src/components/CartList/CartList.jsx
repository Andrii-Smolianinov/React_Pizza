import React from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import CartCap from "./CartCap";

import { IoReturnUpBackSharp } from "react-icons/io5";

export default function CartList({ items, isLoading }) {
  return (
    <>
      <CartCap />
      <ul className="flex flex-col items-center      
      gap-3 sm:gap-4 lg:gap-6
      px-0 sm:px-10 lg:px-80
      py-4 lg:py-10">
        {isLoading ? <h1>Loading...</h1> : <CartItem items={items} />}
      </ul>
      <Link
        to="/"
        className="inline-flex px-3 py-px items-center rounded-xl
        ml-0 sm:ml-10 lg:ml-80 
        font-medium sm:font-semibold lg:font-bold 
        text-base sm:text-lg lg:text-xl
        bg-lime-700 text-green-200
      hover:bg-lime-200 hover:text-green-700 transition-all duration-350"
      >
        <IoReturnUpBackSharp className="mr-2" />
        Повернутись до замовлень
      </Link>
    </>
  );
}
