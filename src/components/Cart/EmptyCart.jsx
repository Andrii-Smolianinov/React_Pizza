import React from "react";
import ButtonComeBack from "../ButtonComeBack";
import CartHeadSection from "./CartHeadSection";

export default function EmptyCart() {
  return (
    <div className="">
      <div className="flex my-5">
        <CartHeadSection tittle={"Корзина порожня"} />
      </div>

      <ButtonComeBack tittle={"повернутись до замовлень"} />

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
