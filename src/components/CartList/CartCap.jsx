import React from 'react'

import { BsCart } from "react-icons/bs";
import ButtonClearCart from "../ButtonClearCart";

export default function CartCap() {
  return (
    <div className="flex justify-between">
        <div className="flex items-center">
          <BsCart size="30" className="fill-lime-700" />
          <h1 className="font-bold text-2xl ml-2 text-lime-700">Корзина</h1>
        </div>
        <ButtonClearCart />
      </div>
  )
}
