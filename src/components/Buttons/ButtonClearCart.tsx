import React from "react";
import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";
import { clearCart, clearTotalPrice } from "../../redux/slices/cartSlice";

import { RiDeleteBin6Line } from "react-icons/ri";

const ButtonClearCart: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onClickClear = () => {
    dispatch(clearCart());
    dispatch(clearTotalPrice());
  };

  return (
    <button
      type="button"
      className="p-1 max-h-[40px] border-2 rounded-lg border-lime-700 text-lime-700 hover:border-lime-500 hover:text-lime-500 
      transition duration-300"
      onClick={onClickClear}
    >
      <span className="flex items-center text-base sm:text-lg lg:text-xl">
        <RiDeleteBin6Line className="mr-1" />
        {t("clear")}
      </span>
    </button>
  );
};

export default ButtonClearCart;
