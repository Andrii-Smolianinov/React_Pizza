import React from "react";

import { BsCart } from "react-icons/bs";
import ButtonClearCart from "../ButtonClearCart";

export default function CartCap() {
  return (
    <div className="flex flex-wrap items-center justify-between
    px-0 sm:px-10 lg:px-20 xl:px-40"
      >
      <div className="flex items-center my-4">
        <BsCart size="30" className="fill-lime-700" />
        <h1 className="font-bold text-base sm:text-lg lg:text-xl ml-2 text-lime-700">Корзина</h1>
      </div>
      <ButtonClearCart />
    </div>
  );
}
