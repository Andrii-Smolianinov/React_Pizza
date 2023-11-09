import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/slices/cartSlice";

import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function CartItem() {
  const { itemsCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onRemoveItem = (index) => {
    dispatch(removeItemFromCart(index));
  };

  return itemsCart.map(
    ({ id, images, tittle, price, selectDiameter, itemPrice, count }, index) => (
      <li
        key={index}
        className=" flex items-center content-between border-solid border-2 rounded-md border-lime-600 overflow-hidden    
        w-[800px]
        pr-2 sm:pr-4 lg:pr-6 xl:pr-8
        gap-1 sm:gap-3 lg:gap-4"
      >
        {/* images */}
        <div className="overflow-hidden contents">
          <img
            className="h-9 sm:h-12 lg:h-16 
          w-12 sm:w-16 lg:w-20"
            src={images}
            alt="element pizza"
          ></img>
        </div>

        {/* tittle */}
        <h2
          className="text-center text-base sm:text-lg lg:text-xl font-extrabold text-red-600
        w-1/2"
        >
          {tittle}
        </h2>

        {/* diameter */}
        <p className="text-center text-lime-600">діаметр: {selectDiameter}см</p>

        {/* price for 1 */}
        <div className="w-1/5 text-center">
          <p className="text-lime-600">ціна за шт</p>
          <div className="flex items-center justify-center">
            <span
              className="font-bold font-mono 
          text-base sm:text-lg lg:text-xl"
            >
              {price}
            </span>
            <span className="ml-px sm:ml-1 lg:ml-1.5 xl:ml-2">грн</span>
          </div>
        </div>

        {/* buttons -1+ */}
        <div className="flex items-center">
          <AiOutlineMinusCircle
            size={25}
            className="hover:fill-lime-700 cursor-pointer"
            onClick={() => {}}
          />
          <span
            className="font-bold font-mono      
          m-2 sm:m-3 lg:m-4 xl:m-5
          text-base sm:text-lg lg:text-xl"
          >
            {count}
          </span>
          <AiOutlinePlusCircle
            size={25}
            className="hover:fill-lime-700 cursor-pointer"
            onClick={() => {}}
          />
        </div>

        {/* price all */}
        <div className="w-1/4 text-center">
          <p className="text-lime-600">всього</p>
          <div className="flex items-center justify-center">
            <span
              className="font-bold font-mono 
          text-base sm:text-lg lg:text-xl"
            >
              {itemPrice}
            </span>
            <span className="ml-px sm:ml-1 lg:ml-1.5 xl:ml-2">грн</span>
          </div>
        </div>

        {/* icon delete */}
        <div className="">
          <RiDeleteBin6Line
            onClick={() => onRemoveItem(index, price)}
            size={20}
            className="hover:fill-lime-700 cursor-pointer"
          />
        </div>
      </li>
    )
  );
}
