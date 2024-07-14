import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  onClickToButtonCartOrder: () => void;
};

const ButtonCartOrder: React.FC<Props> = ({ onClickToButtonCartOrder }) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={onClickToButtonCartOrder}
      className="block rounded-xl max-h-10 bg-lime-700 text-green-200 hover:bg-lime-200 hover:text-green-700        
          px-2 lg:px-3
          py-px lg:py-1
          text-lg sm:text-xl lg:text-2xl
          transition duration-300"
    >
      {t("order")}
    </button>
  );
};

export default ButtonCartOrder;
