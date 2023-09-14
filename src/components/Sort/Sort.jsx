import React from "react";

import Filter from "./Filter";

const categories = [
  { text: "Усі" },
  { text: "Мясні" },
  { text: "Вегатеріанські" },
  { text: "Гриль" },
  { text: "Гострі" },
  { text: "Акційні" },
];

export default function Sort() {
  const [activeIndexSort, setActiveIndexSort] = React.useState(0);
  const [activeTypePizza, setActiveTypePizza] = React.useState("Усі");

  const onClickButtonSort = function (index, text) {
    setActiveIndexSort(index);
    setActiveTypePizza(text);
  };

  const elements = categories.map(({ text }, index) => (
    <li
      onClick={() => onClickButtonSort(index, text)}
      key={index}
      className={`
      inline-block py-[2px] px-[8px] m-1 md:px-[15px] md:m-2 lg:px-[25px] lg:m-3 font-bold rounded-xl cursor-pointer
      transition-all duration-350
      ${
        activeIndexSort === index
          ? "bg-lime-700 text-green-200 hover:bg-lime-700"
          : "bg-lime-200 text-green-600 hover:bg-teal-500 hover:text-green-100"
      }      
      `}
    >
      {text}
    </li>
  ));

  return (
    <>
      <div
        className="
        flex flex-wrap px-8 py-6 items-center justify-between  bg-yellow-100"
      >
        <ul
          className="
        flex flex-wrap justify-start
        "
        >
          {elements}
        </ul>
        <Filter />
      </div>
      <h1 className="text-3xl font-extrabold text-lime-700 pl-[40px] bg-yellow-100">
        {activeTypePizza} піци
      </h1>
    </>
  );
}
