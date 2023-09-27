import React from "react";

export default function CartItem({ items }) {
  console.log("itemsInCart", items);

  return items.map(({ id, images, tittle, price }) => (
    <li key={id} className="w-full flex mt-2 items-center border-solid border-2 rounded-md border-lime-600 overflow-hidden">
      <div className="overflow-hidden contents">
        <img
          className="h-9 w-12"
          src={images}
          alt="element pizza"
        ></img>
      </div>
      <h2 className="ml-5 text-center text-xs sm:text-lg lg:text-xl font-extrabold italic text-red-600">
        {tittle}
      </h2>
    </li>
  ));
}
