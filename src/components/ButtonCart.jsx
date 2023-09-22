import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

export default function ButtonCart() {
  return (
    <Link
      to="/cart"
      className="flex items-center w-48 h-10 ml-8 rounded-xl font-bold text-2xl bg-lime-700 text-green-200 "
    >
      <span className="px-2 border-green-200 border-r">500 грн</span>
      <BsCart className="mx-3" />
      <span>5</span>
    </Link>
  );
}
