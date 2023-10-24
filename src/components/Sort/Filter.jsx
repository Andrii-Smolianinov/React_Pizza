import React from "react";
import { useDispatch } from "react-redux";

import { setFilterCategory } from "../../redux/slices/filterSlice";

export default function Filter() {
  const dispatch = useDispatch();

  const handleSelect = function (event) {
    dispatch(setFilterCategory(event.target.value));
  };

  return (
    <div className="flex p-2 items-center">
      <p className="text-base sm:text-lg lg:text-xl ">
        Сортування по<span className="font-serif">:</span>
      </p>
      <select
        className="bg-transparent ml-2 font-bold cursor-pointer
        text-base sm:text-lg lg:text-xl"
        onChange={handleSelect}
        name="select-category"
      >
        <option value="rating">популярності</option>
        <option value="price">ціні</option>
        <option value="tittle">назві</option>
      </select>
    </div>
  );
}
