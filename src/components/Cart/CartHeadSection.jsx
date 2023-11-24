import React from "react";
import { BsCart } from "react-icons/bs";

const CartHeadSection = ({ tittle }) => {
  return (
    <>
      <BsCart size="30" className="fill-lime-700" />
      <h2
        className="ml-2 font-bold text-lime-700
        text-base sm:text-lg lg:text-xl"
      >
        {tittle}
      </h2>
    </>
  );
};

export default CartHeadSection;
