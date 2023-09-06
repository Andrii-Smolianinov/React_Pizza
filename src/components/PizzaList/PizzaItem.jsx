import React from "react";
import pizzaData from "../../assets/data.json";

import CategorieEL from "./elements/CategorieEL";
import DiameterEL from "./elements/DiameterEL";

export default function PizzaItem() {
  return pizzaData.map(({ id, images, tittle, price }) => (
    <li
      key={id}
      className="flex-col max-w-[280px] h-[450px] border-solid border-2 rounded-md border-rose-600 bg-amber-50 
      overflow-hidden group hover:shadow-lg hover:shadow-indigo-500/90 transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-350"
          src={images}
          alt="element pizza"
        ></img>
      </div>
      <h2 className="text-center my-8 text-2xl font-extrabold italic text-red-600">
        {tittle}
      </h2>
      <div className="border-solid border-2 border-rose-300">
        <ul className="flex justify-center border-solid border-2 border-rose-300 bg-rose-300">
          {<CategorieEL />}
        </ul>
        <ul className="flex justify-center border-solid border-2 border-rose-300 bg-rose-300">
          {<DiameterEL />}
        </ul>
      </div>
      <div className="flex justify-around items-center my-5">
        <p className="ml-5 text-2xl font-extrabold">{price} грн.</p>
        <button
          className="p-3 font-bold border-2 rounded-md border-rose-300 hover:bg-rose-300 hover:text-amber-50 transition-all duration-350"
          type="button"
        >
          Замовити <span></span>
        </button>
      </div>
    </li>
  ));
}
