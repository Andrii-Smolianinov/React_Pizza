import React from "react";
import { useTranslation } from "react-i18next";

import ButtonComeBack from "../Buttons/ButtonComeBack";
import CartHeadSection from "./CartHeadSection";

export default function EmptyCart() {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="flex my-5">
        <CartHeadSection tittle={t("empty")} />
      </div>

      <ButtonComeBack tittle={t("backOrder")} />

      <div className="flex flex-col items-center ">
        <div className="bg-[url('/src/assets/img/not-found.png')] bg-cover w-[276px] h-[258px] my-5"></div>
        <p className="font-bold text-2xl text-center text-lime-700">
          {t("makeOrder")}
        </p>
      </div>
    </div>
  );
}
