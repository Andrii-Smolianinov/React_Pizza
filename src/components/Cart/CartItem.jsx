import React from "react";
import { useSelector } from "react-redux";

import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartItem() {
  const { itemsCart } = useSelector((state) => state.cart);

  return itemsCart.map(({ id, images, tittle, price }, index) => (
    <li
      key={index}
      className=" flex items-center content-between border-solid border-2 rounded-md border-lime-600 overflow-hidden    
    w-full 
    pr-2 sm:pr-4 lg:pr-6 xl:pr-8
    gap-1 sm:gap-6 lg:gap-8
    "
    >
      <div className="overflow-hidden contents">
        <img
          className="h-9 sm:h-12 lg:h-16 
          w-12 sm:w-16 lg:w-20"
          src={images}
          alt="element pizza"
        ></img>
      </div>
      <h2
        className="text-center text-base sm:text-lg lg:text-xl font-extrabold text-red-600
      w-3/5 lg:w-4/5
      "
      >
        {tittle}
      </h2>
      <div className="flex items-center">
        <AiOutlineMinusCircle
          size={25}
          className="hover:fill-lime-700 cursor-pointer"
        />
        <span
          className="font-bold font-mono      
      m-2 sm:m-3 lg:m-4 xl:m-5
      text-base sm:text-lg lg:text-xl"
        >
          3
        </span>
        <AiOutlinePlusCircle
          size={25}
          className="hover:fill-lime-700 cursor-pointer"
        />
      </div>
      <div className="flex items-center">
        <span
          className="font-bold font-mono
      text-base sm:text-lg lg:text-xl"
        >
          {price}
        </span>
        <span className="ml-px sm:ml-1 lg:ml-1.5 xl:ml-2">грн</span>
      </div>
      <div>
        <RiDeleteBin6Line
          size={20}
          className="hover:fill-lime-700 cursor-pointer"
        />
      </div>
    </li>
  ));
}
