import React from "react";
import { Link } from "react-router-dom";

import { IoReturnUpBackSharp } from "react-icons/io5";
import { BsCart } from "react-icons/bs";

export default function EmptyCart() {
  return (
    <div className="">
      <div className="flex my-5">
        <BsCart size="30" className="fill-lime-700" />
        <h2
          className="ml-2 font-bold text-lime-700
          text-base sm:text-lg lg:text-xl"
        >
          Корзина порожня
        </h2>
      </div>
      <Link
        to="/"
        className="flex px-2 mb-5 max-w-[320px] items-center rounded-xl font-bold text-xl bg-lime-700 text-green-200
      hover:bg-lime-200 hover:text-green-700 transition-all duration-350"
      >
        <IoReturnUpBackSharp className="mr-2" />
        повернутись до замовлень
      </Link>
      <div className="flex flex-col items-center px-10">
        <img
          alt="cart-empty"
          src="images/not-found.jpg"
          className="mx-auto my-5"
        ></img>
        <p className="font-bold text-2xl text-lime-700">
          Зробіть будь-ласка замовлення
        </p>
      </div>
    </div>
  );
}
