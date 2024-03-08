import React from "react";
import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";
import { setSortCategory } from "../../redux/slices/sortSlice";

const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSelect = function (event) {
    dispatch(setSortCategory(event.target.value));
  };

  return (
    <div className="flex p-2 items-center">
      <p className="text-base sm:text-lg lg:text-xl">{t("sort")}:</p>
      <select
        className="bg-transparent ml-2 font-normal cursor-pointer w-[153px]
        text-base sm:text-lg lg:text-xl"
        onChange={handleSelect}
        name="select-category"
      >
        <option value="price">{t("price")}</option>
        <option value="tittle">{t("tittle")}</option>
        <option value="rating">{t("rating")}</option>
      </select>
    </div>
  );
};

export default Sort;
