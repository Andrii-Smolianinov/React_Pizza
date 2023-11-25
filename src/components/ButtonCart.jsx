import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { selectCart } from "../redux/slices/cartSlice";

export default function ButtonCart() {
  const { totalPrice, itemsCart } = useSelector(selectCart);

  return (
    <Link
      to="/cart"
      className="block rounded-xl 
      px-2 lg:px-3
      py-px lg:py-1
      text-lg sm:text-xl lg:text-2xl
      bg-lime-700 text-green-200 
      hover:bg-lime-200 hover:text-green-700 transition-all duration-350"
    >
      <span className="flex items-center">
        <span className="pr-2 lg:pr-3 border-r border-green-200 group-hover:border-lime-700">
          <span className="font-bold font-mono">{totalPrice}</span> грн
        </span>
        <BsCart className="m-2" />
        <span className="font-bold font-mono">{itemsCart.length}</span>
      </span>
    </Link>
  );
}
