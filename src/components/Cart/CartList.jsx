import React from "react";

import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";

import CartItem from "./CartItem";
import ButtonClearCart from "../ButtonClearCart";
import ButtonComeBack from "../ButtonComeBack";
import CartHeadSection from "./CartHeadSection";

import { AppContext } from "../../App";

export default function CartList() {
  const { isLoading } = React.useContext(AppContext);
  const { totalPrice } = useSelector(selectCart);

  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center my-4">
          <CartHeadSection tittle={"Корзина"} />
        </div>
        <ButtonClearCart />
      </div>

      <ButtonComeBack tittle={"Назад до головного меню"} />

      <div className="flex justify-center">
        <ul
          className="flex flex-col items-center      
          gap-3 sm:gap-4 lg:gap-6
          px-0 
          pt-4 lg:pt-10"
        >
          {isLoading ? <h1>Loading...</h1> : <CartItem />}
        </ul>

        <img
          alt="cart-images"
          src="images/cart-img.jpg"
          className="invisible lg:visible transition-all duration-350
          w-0 lg:w-[354px] xl:w-[450px]
          h-0 lg:h-[374px] xl:h-[480px]
          "
        ></img>
      </div>

      <div className="flex flex-wrap justify-between content-between py-4">
        <p
          className="py-2
          text-xl sm:text-2xl lg:text-3xl
          font-semibold sm:font-bold lg:font-extrabold"
        >
          Вартість <br />
          замовленн<span className="font-bold font-mono text-lg">’</span>я
          <span className="font-bold font-mono text-lg">:</span>
          <span className="font-bold font-mono text-3xl text-red-700 m-2">
            {totalPrice}
          </span>
          грн<span className="font-bold font-mono text-lg">.</span>
        </p>
        <button
          type="button"
          className="block rounded-xl max-h-10 bg-lime-700 text-green-200 hover:bg-lime-200 hover:text-green-700        
          px-2 lg:px-3
          py-px lg:py-1
          text-lg sm:text-xl lg:text-2xl
          transition-all duration-350"
        >
          Замовити
        </button>
      </div>
    </div>
  );
}
