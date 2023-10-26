import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setSearchPizza } from "../../redux/slices/searchSlice";

import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

export default function SearchPizza() {
  const dispatch = useDispatch();
  const searchPizza = useSelector((state) => state.search.searchPizza);

  const inputRef = React.useRef();

  const onClear = function () {
    dispatch(setSearchPizza(""));
    inputRef.current.focus();
  };

  return (
    <div
      className="flex items-center relative 
    my-2 sm:my-0"
    >
      <BiSearch className="absolute left-2" />
      <input
        ref={inputRef}
        value={searchPizza}
        onChange={(e) => dispatch(setSearchPizza(e.target.value))}
        type="text"
        placeholder="пошук піци"
        className="px-7 py-1 border-solid border-2 border-red-600 rounded
          text-base font-normal"
      ></input>
      {searchPizza && (
        <AiOutlineClose
          size={18}
          onClick={onClear}
          className="absolute right-2 fill-indigo-500 hover:fill-red-700 cursor-pointer 
            shadow-lg shadow-indigo-500/40 hover:shadow-red-500/40"
        />
      )}
    </div>
  );
}
