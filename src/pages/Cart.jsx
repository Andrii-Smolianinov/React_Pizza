import React from "react";

import CartList from "../components/Cart/CartList";
import EmptyCart from "../components/Cart/EmptyCart";

export default function Cart({
  setShowSearch,
  setShowButtonCart,
  isEmptyCart,
}) {
  React.useEffect(() => {
    setShowSearch(false);
    setShowButtonCart(false);
  });

  return (
    <section
      className="bg-yellow-100 min-h-[82vh] 
      p-2 sm:p-3 lg:p-8"
    >
      {isEmptyCart ? <CartList /> : <EmptyCart />}
    </section>
  );
}
