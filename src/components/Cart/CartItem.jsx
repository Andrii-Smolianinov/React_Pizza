import React from "react";
import { useTranslation } from "react-i18next";

import { useSelector, useDispatch } from "react-redux";
import {
  removeItemFromCart,
  setIncrementCount,
  setDecrementCount,
  selectCart,
} from "../../redux/slices/cartSlice";
import { selectChangeLang } from "../../redux/slices/changeLangSlice";

import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function CartItem() {
  const { activeIndexLang } = useSelector(selectChangeLang);
  const { itemsCart } = useSelector(selectCart);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onRemoveItem = (index) => {
    dispatch(removeItemFromCart(index));
  };

  return itemsCart.map(
    ({ images, tittle, price, count, itemPrice, selectDiameter }, index) => (
      <li
        key={index}
        className="flex items-center content-between border-solid border-2 rounded-md border-lime-600 overflow-hidden 
        pr-2 sm:pr-3 lg:pr-4
        w-[355px] sm:w-[550px] lg:w-[665px] 
        h-[55px] sm:h-[66px]
        gap-1 sm:gap-2 lg:gap-3"
      >
        {/* images */}
        <div className="overflow-hidden contents">
          <img
            className="invisible sm:visible
            h-0 sm:h-16  
            w-0 sm:w-20"
            src={images}
            alt="Pizza images"
          ></img>
        </div>

        {/* tittle */}
        <div className="block w-24 sm:w-40">
          <h2
            className="text-center font-extrabold text-red-600 
            text-base/[17px] sm:text-lg/[17px] lg:text-xl/[17px]"
          >
            {tittle[activeIndexLang]}
          </h2>
        </div>

        {/* diameter */}
        <p className="text-center text-lime-600 text-sm/[17px] ">
          <span
            className="block invisible sm:visible 
          w-0 sm:w-10 h-0 sm:h-4"
          >
            {t("diametrCart")}:
          </span>{" "}
          {selectDiameter}
          {t("sm")}
        </p>

        {/* price for 1 */}
        <div className="invisible sm:visible w-0 sm:w-28 text-center">
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
        <div className="flex items-center w-24">
          <AiOutlineMinusCircle
            size={25}
            className="hover:fill-lime-700 cursor-pointer transition duration-300"
            onClick={() => {
              dispatch(setDecrementCount(index));
            }}
          />
          <p
            className="font-bold text-center           
            text-base sm:text-lg lg:text-xl
            w-8"
          >
            {count}
          </p>
          <AiOutlinePlusCircle
            size={25}
            className="hover:fill-lime-700 cursor-pointer transition duration-300"
            onClick={() => {
              dispatch(setIncrementCount(index));
            }}
          />
        </div>

        {/* total price */}
        <div className="text-center w-24">
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
            className="hover:fill-lime-700 cursor-pointer transition duration-300"
          />
        </div>
      </li>
    )
  );
}
