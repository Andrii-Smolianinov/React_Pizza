import React from "react";

export default function EmptyCart() {
  return (
    <div className="flex-col justify-center">
      <h2 className="text-center m-5 font-bold text-xl text-lime-700">
        Корзина порожня
      </h2>
      <img
        alt="cart-empty"
        src="images/not-found.jpg"
        className="mx-auto"
      ></img>
    </div>
  );
}
