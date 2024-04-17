import React from "react";
import { useTranslation } from "react-i18next";

import { ButtonComeBack, CartHeadSection } from "../index";

import notFoundIMG from "../../assets/img/not-found.png";

const EmptyCart: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="flex my-5">
        <CartHeadSection tittle={t("empty")} />
      </div>

      <ButtonComeBack tittle={t("backOrder")} />

      <div className="flex flex-col items-center ">
        <img
          alt="empty cart"
          src={notFoundIMG}
          className="mx-auto my-5"
          width={276}
          height={208}
        ></img>
        <p className="font-bold text-2xl text-center text-lime-700">
          {t("makeOrder")}
        </p>
      </div>
    </div>
  );
};

export default EmptyCart;
