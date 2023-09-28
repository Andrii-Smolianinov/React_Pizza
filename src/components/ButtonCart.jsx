import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

export default function ButtonCart() {
  return (
    <Link
      to="/cart"
      className="block rounded-xl  bg-lime-700 text-green-200 group hover:bg-lime-200 hover:text-green-700
      px-2 lg:px-3
      py-px lg:py-1
      text-lg sm:text-xl lg:text-2xl"
    >
      <span className="flex items-center">
        <span className="pr-2 lg:pr-3 border-r border-green-200 group-hover:border-lime-700">
          <span className="font-bold font-mono">2579</span>{" "}
          грн
        </span>
        <BsCart className="m-2" /><span className="font-bold font-mono">5</span>
      </span>
    </Link>
  );
}
