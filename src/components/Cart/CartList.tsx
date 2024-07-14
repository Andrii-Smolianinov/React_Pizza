import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cart/cartSlice";

import {
  CartItem,
  ButtonClearCart,
  ButtonComeBack,
  ButtonCartOrder,
  CartHeadSection,
} from "../index";

import cartIMG from "../../assets/img/cart-img.png";
import dialogIMG from "../../assets/img/dialog.png";

const CartList: React.FC = () => {
  const [showDialogIMG, setShowDialogIMG] = useState<boolean | null>(false);
  const { totalPrice } = useSelector(selectCart);
  const { t } = useTranslation();

  const onClickToButtonCartOrder = () => {
    setShowDialogIMG(true);
  };

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

        {showDialogIMG && (
          <img alt="Dialog images" src={dialogIMG} className="lg:w-20 h-10"></img>
        )}
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

        <ButtonCartOrder onClickToButtonCartOrder={onClickToButtonCartOrder} />
      </div>
    </div>
  );
};

export default CartList;
