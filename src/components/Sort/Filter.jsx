import React from "react";

export default function Filter() {
  // eslint-disable-next-line
  const [selectCategory, setSelectCategory] = React.useState("");

  const handleSelect = function (event) {
    setSelectCategory(event.target.value);
  };

  return (
    <div className="flex p-2 items-center">
      <p className="text-base sm:text-lg lg:text-xl ">Сортування по<span className="font-serif">:</span></p>
      <select
        className="bg-transparent ml-2 font-bold cursor-pointer
        text-base sm:text-lg lg:text-xl"
        onChange={handleSelect}
        name="select-category"
      >
        <option value="popular">популярності</option>
        <option value="price">ціні</option>
        <option value="name">назві</option>
      </select>
    </div>
  );
}
