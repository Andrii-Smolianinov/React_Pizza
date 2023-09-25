import React from "react";

export default function CartItem({ items }) {
  console.log("itemsInCart", items);

  return items.map(({ id, images, tittle, price }) => (
    <li key={id} className="w-full flex my-5 items-center border-solid border-2 rounded-md border-lime-600 overflow-hidden">
      <div className="overflow-hidden">
        <img
          className="h-[84px] w-[104px]"
          src={images}
          alt="element pizza"
        ></img>
      </div>
      <h2 className="ml-5 text-center text-xl font-extrabold italic text-red-600">
        {tittle}
      </h2>
    </li>
  ));
}
