import React from "react";
import { useTranslation } from "react-i18next";

const ButtonOrder = ({ onClickAddToCart, orderCount }) => {
  const { t } = useTranslation();

  return (
    <button
      className={`p-3 font-bold rounded-md  hover:bg-cyan-500 hover:text-cyan-100 transition-all duration-300
      ${orderCount ? "bg-cyan-600 text-cyan-50" : "bg-teal-200"}`}
      type="button"
      onClick={onClickAddToCart}
    >
      {t("order")}
      <span> {orderCount}</span>
    </button>
  );
};

export default ButtonOrder;
