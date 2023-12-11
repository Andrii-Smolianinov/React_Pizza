import React from "react";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";
import {
  setFilterCategory,
  setActiveTypePizza,
  selectSort,
} from "../../redux/slices/sortSlice";
import { selectChangeLang } from "../../redux/slices/changeLangSlice";
import { setCurrentPage, setActiveIndexPage } from "../../redux/slices/paginationSlice";

import Sort from "./Sort";

const categories = [
  { text: ["Усі", "All"] },
  { text: ["Мясні", "Meat"] },
  { text: ["Вегатеріанські", "Vegetarian"] },
  { text: ["Гриль", "Grill"] },
  { text: ["Гострі", "Hot"] },
  { text: ["Акційні", "Promotional"] },
];

export default function Filter() {
  const { filterCategory, activeTypePizza } = useSelector(selectSort);
  const { activeIndexLang } = useSelector(selectChangeLang);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onClickFilterButton = function (index, text) {
    dispatch(setCurrentPage(1));
    dispatch(setActiveIndexPage(0));
    dispatch(setFilterCategory(index));
    dispatch(setActiveTypePizza(text));
  };

  const elements = categories.map(({ text }, index) => (
    <li
      onClick={() => onClickFilterButton(index, text)}
      key={index}
      className={`      
      inline-block
      m-1 sm:m-2 lg:m-3
      px-2 sm:px-3 lg:px-4
      py-px 
      text-base sm:text-lg lg:text-xl 
      font-medium sm:font-semibold lg:font-bold
      rounded-xl cursor-pointer
      transition-all duration-350
      ${
        filterCategory === index
          ? "bg-lime-700 text-green-200 hover:bg-lime-700"
          : "bg-lime-200 text-green-600 hover:bg-teal-500 hover:text-green-100"
      }      
      `}
    >
      {text[activeIndexLang]}
    </li>
  ));

  return (
    <>
      <nav
        className="flex flex-wrap items-center justify-between  bg-yellow-100 
        p-2 sm:p-3 lg:p-6"
      >
        <ul className="flex flex-wrap justify-start">{elements}</ul>
        <Sort />
      </nav>
      <h1
        className="        
        text-xl sm:text-2xl lg:text-3xl
        font-semibold sm:font-bold lg:font-extrabold
        pl-4 sm:pl-6 lg:pl-10
        mb-2 sm:mb-4 lg:mb-6
        text-lime-700  bg-yellow-100"
      >
        {activeTypePizza[activeIndexLang]} {t("pizza")}
      </h1>
    </>
  );
}
