import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

export default function ButtonCart() {
  return (
    <Link
      to="/cart"
      className="flex items-center w-48 h-10 ml-8 rounded-xl font-bold text-2xl bg-lime-700 text-green-200
      group hover:bg-lime-200 hover:text-green-700"
    >
      <span className="px-2 border-r border-green-200 group-hover:border-lime-700">500 грн</span>
      <BsCart className="mx-3 " />
      <span className="mx-3">5</span>
    </Link>
  );
}
