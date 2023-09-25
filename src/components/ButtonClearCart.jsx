import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";

export default function ButtonClearCart() {
  return (
    <button
      type="button"
      className="p-1 max-h-[40px] border-2 rounded-lg border-lime-700 text-lime-700 hover:border-lime-500 hover:text-lime-500 transition-all duration-350"
    >
      <span className="flex items-center">
        <RiDeleteBin6Line className="mr-1" />
        Очистити корзину
      </span>
    </button>
  );
}
