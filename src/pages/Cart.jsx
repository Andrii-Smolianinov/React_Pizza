import React from "react";
import { BsCart } from "react-icons/bs";
import ButtonClearCart from "../components/ButtonClearCart";

export default function Cart() {
   // eslint-disable-next-line
  const [itemCart, setItemCart] = React.useState(null);

  return (
    <div className="bg-yellow-100 px-8 py-10">
      <div className="flex justify-between">
        <div className="flex items-center">
          <BsCart size="30" className="fill-lime-700" />
          <h1 className="font-bold text-2xl ml-2 text-lime-700">Корзина</h1>
        </div>
        <ButtonClearCart />
      </div>
      {itemCart ? (
        <ul>{itemCart}</ul>
      ) : (
        <div className="flex-col justify-center">
          <h2 className="text-center m-5 font-bold text-xl text-lime-700">Корзина порожня</h2> 
          <img alt="cart-empty" src="images/not-found.jpg" className="mx-auto"></img>        
        </div>
      )}
    </div>
  );
}
 