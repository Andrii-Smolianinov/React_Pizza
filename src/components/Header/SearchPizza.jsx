import React from "react";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearchPizza } from "../../redux/slices/searchSlice";

import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

export default function SearchPizza() {
  const dispatch = useDispatch();
  const { searchPizza } = useSelector(selectSearch);
  const inputRef = React.useRef();
  const { t } = useTranslation();

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
        placeholder={t("search")}
        className="px-7 border-solid border-2 border-cyan-800 rounded text-base font-normal w-64
        py-0 sm:py-1"
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
