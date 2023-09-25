import React from "react";
import { Link } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { BsCart } from "react-icons/bs";

export default function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex m-5">
        <BsCart size="30" className="fill-lime-700" />
        <h2 className="ml-2 font-bold text-2xl text-lime-700">
          Корзина порожня
        </h2>
      </div>
      <img
        alt="cart-empty"
        src="images/not-found.jpg"
        className="mx-auto"
      ></img>
      <Link to='/'
        className="flex mt-5 items-center rounded-xl font-bold text-xl bg-lime-700 text-green-200
      hover:bg-lime-200 hover:text-green-700 transition-all duration-350"
      >
        <IoReturnUpBackSharp className="mr-2" />
        повернутись до замовлень
      </Link>
    </div>
  );
}
