import React from "react";
import { useTranslation } from "react-i18next";

import { useSelector, useDispatch } from "react-redux";
import {
  removeItemFromCart,
  setIncrementCount,
  setDecrementCount,
  selectCart,
} from "../../redux/slices/cartSlice";
import { selectSort } from "../../redux/slices/sortSlice";

import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function CartItem() {
  const { activeIndexLang } = useSelector(selectSort);
  const { itemsCart } = useSelector(selectCart);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onRemoveItem = (index) => {
    dispatch(removeItemFromCart(index));
  };

  return itemsCart.map(
    (
      { id, images, tittle, price, count, itemPrice, selectDiameter },
      index
    ) => (
      <li
        key={index}
        className=" flex items-center content-between border-solid border-2 rounded-md border-lime-600 overflow-hidden
        w-[315px] sm:w-[550px] lg:w-[595px] xl:w-[750px]
        h-[55px] sm:h-[66px]         
        pr-1 sm:pr-4 lg:pr-6 xl:pr-8
        gap-1 sm:gap-3 lg:gap-4"
      >
        {/* images */}
        <div className="overflow-hidden contents">
          <img
            className="invisible sm:visible
            h-0 sm:h-16  
            w-0 sm:w-20"
            src={images}
            alt="element pizza"
          ></img>
        </div>

        {/* tittle */}
        <h2 className="text-center text-base sm:text-lg lg:text-xl font-extrabold text-red-600 w-1/2">
          {tittle[activeIndexLang]}
        </h2>

        {/* diameter */}
        <p className="text-center text-lime-600">
          <span className="block invisible sm:visible w-0 sm:w-1/4 h-0 sm:h-4">
            {t("diametrCart")}:
          </span>{" "}
          {selectDiameter}
          {t("sm")}
        </p>

        {/* price for 1 */}
        <div className="invisible sm:visible w-0 sm:w-1/5 text-center">
          <p className="text-lime-600">1 {t("pc")}</p>
          <div className="flex items-center justify-center">
            <p
              className="font-bold 
              text-base sm:text-lg lg:text-xl"
            >
              {price}
            </p>
            <span className="ml-px sm:ml-1 lg:ml-1.5 xl:ml-2">{t("uah")}</span>
          </div>
        </div>

        {/* buttons -1+ */}
        <div className="flex items-center">
          <AiOutlineMinusCircle
            size={25}
            className="hover:fill-lime-700 cursor-pointer"
            onClick={() => {
              dispatch(setDecrementCount(index));
            }}
          />
          <p
            className="font-bold  
            m-2 sm:m-3 lg:m-4 xl:m-5
            text-base sm:text-lg lg:text-xl"
          >
            {count}
          </p>
          <AiOutlinePlusCircle
            size={25}
            className="hover:fill-lime-700 cursor-pointer"
            onClick={() => {
              dispatch(setIncrementCount(index));
            }}
          />
        </div>

        {/* price all */}
        <div className="w-1/4 text-center">
          <p className="text-lime-600">{t("total")}</p>
          <div className="flex items-center justify-center">
            <p
              className="font-bold 
              text-base sm:text-lg lg:text-xl"
            >
              {itemPrice}
            </p>
            <span className="ml-px sm:ml-1 lg:ml-1.5 xl:ml-2">{t("uah")}</span>
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
