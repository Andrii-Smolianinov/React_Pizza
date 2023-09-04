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

  const onClickButtonSort = function (index) {
    setActiveIndexSort(index);
  };

  const elements = categories.map(({ text }, index) => (
    <li
      onClick={() => onClickButtonSort(index)}
      key={index}
      className={`
      inline-block
      py-[2px]
      px-[8px]
      m-1
      md:px-[15px]
      md:m-2 
      lg:px-[25px]
      lg:m-3  
      font-bold
      rounded-xl
      cursor-pointer
      transition-all duration-350
      ${
        activeIndexSort === index
          ? "bg-lime-700 text-green-200 hover:bg-lime-700"
          : "bg-lime-400 text-green-600 hover:bg-green-400 hover:text-green-100"
      }      
      `}
    >
      {text}
    </li>
  ));

  return (
    <div
      className="
      flex 
      flex-wrap      
      px-8 
      py-6
      items-center
      justify-between
      border-t-2      
      border-red-600 
      bg-yellow-100"
    >
      <ul
        className="
        flex 
        flex-wrap
        justify-start
        "
      >
        {elements}
      </ul>
      <Filter />
    </div>
  );
}
