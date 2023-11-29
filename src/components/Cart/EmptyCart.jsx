import React from "react";
import { useTranslation } from "react-i18next";

import ButtonComeBack from "../ButtonComeBack";
import CartHeadSection from "./CartHeadSection";

export default function EmptyCart() {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="flex my-5">
        <CartHeadSection tittle={t("empty")} />
      </div>

      <ButtonComeBack tittle={t("backOrder")} />

      <div className="flex flex-col items-center px-10">
        <img
          alt="cart-empty"
          src="images/not-found.jpg"
          className="mx-auto my-5"
        ></img>
        <p className="font-bold text-2xl text-lime-700">{t("makeOrder")}</p>
      </div>
    </div>
  );
}
