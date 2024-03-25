import React from "react";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";

import CartItem from "./CartItem";
import ButtonClearCart from "../Buttons/ButtonClearCart";
import ButtonComeBack from "../Buttons/ButtonComeBack";
import CartHeadSection from "./CartHeadSection";

import cartIMG from "../../assets/img/cart-img.png";

const CartList: React.FC = () => {
  const { totalPrice } = useSelector(selectCart);
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center my-4">
          <CartHeadSection tittle={t("cart")} />
        </div>
        <ButtonClearCart />
      </div>

      <ButtonComeBack tittle={t("backMain")} />

      <div className="flex justify-center">
        <ul
          className="flex flex-col items-center      
          gap-3 sm:gap-4 lg:gap-6
          px-0 
          py-10"
        >
          {<CartItem />}
        </ul>

        <img
          alt="Pizza images"
          src={cartIMG}
          className="invisible lg:visible 
          w-0 lg:w-72 h-80"
        ></img>
      </div>

      <div className="flex flex-wrap justify-between content-between py-4">
        <p
          className="py-2
          text-xl sm:text-2xl lg:text-3xl
          font-semibold sm:font-bold lg:font-extrabold"
        >
          {t("cost")} <br />
          {t("costOrder")}:
          <span className="font-bold text-3xl text-red-700 m-2">
            {totalPrice}
          </span>
          {t("uah")}
        </p>
        <button
          type="button"
          className="block rounded-xl max-h-10 bg-lime-700 text-green-200 hover:bg-lime-200 hover:text-green-700        
          px-2 lg:px-3
          py-px lg:py-1
          text-lg sm:text-xl lg:text-2xl
          transition duration-300"
        >
          {t("order")}
        </button>
      </div>
    </div>
  );
};

export default CartList;
