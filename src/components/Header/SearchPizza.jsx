import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

export default function SearchPizza({ searchPizza, setSearchPizza }) {
  return (
    <div className="flex items-center relative">
      <BiSearch className="absolute left-2" />
      <input
        value={searchPizza}
        onChange={(e) => setSearchPizza(e.target.value)}
        type="text"
        placeholder="пошук піци"
        className="px-7 py-1 border-solid border-2 border-red-600 rounded
          text-base font-normal"
      ></input>
      {searchPizza && (
        <AiOutlineClose
          size={18}
          onClick={() => setSearchPizza("")}
          className="absolute right-2 fill-indigo-500 hover:fill-red-700 cursor-pointer 
            shadow-lg shadow-indigo-500/40 hover:shadow-red-500/40"
        />
      )}
    </div>
  );
}
