import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { BsCart } from "react-icons/bs";
import { selectCart } from "../../redux/slices/cartSlice";

export default function ButtonCart() {
  const { totalPrice, itemsCart } = useSelector(selectCart);
  const { t } = useTranslation();

  return (
    <Link
      to="/cart"
      className="block rounded-xl      
      px-2 lg:px-3     
      text-lg sm:text-xl lg:text-2xl
      bg-lime-700 text-green-200 
      hover:bg-lime-200 hover:text-green-700 transition duration-300"
    >
      <span className="flex items-center justify-center">
        <span className="pr-2 lg:pr-3 border-r border-green-200 group-hover:border-lime-700">
          <span className="font-bold">{totalPrice}</span>{" "}
          <span className="text-xl">{t("uah")}</span>
        </span>
        <BsCart className="m-2" />
        <span className="font-bold">{itemsCart.length}</span>
      </span>
    </Link>
  );
}
