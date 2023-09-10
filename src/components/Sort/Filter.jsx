import React from "react";

export default function Filter() {
  const [selectCategory, setSelectCategory] = React.useState("");

  const handleSelect = function (event) {
    setSelectCategory(event.target.value);
  };

  return (
    <div className="flex p-[10px]">
      <p>Сортування по:</p>
      <select
        className="
      bg-transparent
      font-bold
      mb-[5px]
      ml-2
      cursor-pointer
      "
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
