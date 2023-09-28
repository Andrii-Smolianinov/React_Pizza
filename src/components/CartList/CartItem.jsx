import React from "react";

export default function CartItem({ items }) {
  console.log("itemsInCart", items);

  return items.map(({ id, images, tittle, price }) => (
    <li key={id} className="w-full flex items-center border-solid border-2 rounded-md border-lime-600 overflow-hidden cursor-pointer
   
    gap-3 sm:gap-6 lg:gap-8">
      <div className="overflow-hidden contents">
        <img
          className="h-9 sm:h-12 lg:h-16 
          w-12 sm:w-16 lg:w-20"
          src={images}
          alt="element pizza"
        ></img>
      </div>
      <h2 className="text-center text-base sm:text-lg lg:text-xl font-extrabold text-red-600">
        {tittle}
      </h2>
    </li>
  ));
}
