import React from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import CartCap from "./CartCap";

import { IoReturnUpBackSharp } from "react-icons/io5";

export default function CartList({ items, isLoading }) {
  return (
    <>
      <CartCap />
      <ul className="flex flex-col items-center">
      {isLoading ? (
        <h1>Loading...</h1>) : (
        <CartItem items={items} />
      )}
    </ul>      
      <Link
        to="/"
        className="inline-flex px-3 py-px mt-5 items-center rounded-xl font-bold text-xl bg-lime-700 text-green-200
      hover:bg-lime-200 hover:text-green-700 transition-all duration-350"
      >
        <IoReturnUpBackSharp className="mr-2" />
        Повернутись до замовлень
      </Link>
    </>
  );
}
