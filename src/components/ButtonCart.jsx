import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

export default function ButtonCart() {
  return (
    <Link
      to="/cart"
      className="block p-2 lg:p-3 ml-8 rounded-xl font-bold text-base sm:text-lg lg:text-xl bg-lime-700 text-green-200
      group hover:bg-lime-200 hover:text-green-700"
    >
      <span className="flex items-center">
        <span className="pr-2 lg:pr-3 border-r border-green-200 group-hover:border-lime-700">
          500 грн
        </span>
        <BsCart className="mx-3" />5
      </span>
    </Link>
  );
}
