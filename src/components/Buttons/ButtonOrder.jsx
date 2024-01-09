import React from "react";
import { useTranslation } from "react-i18next";

const ButtonOrder = ({ onClickAddToCart, isOrder, itemCount }) => {
  const { t } = useTranslation();

  return (
    <button
      className={`p-3 font-bold border-2 rounded-md  border-cyan-800 hover:bg-teal-500 hover:text-amber-50 hover:border-teal-500 transition-all 
      ${isOrder ? "bg-lime-300" : "bg-amber-50"}`}
      type="button"
      onClick={onClickAddToCart}
    >
      {t("order")}
      <span> {itemCount}</span>
    </button>
  );
};

export default ButtonOrder;
