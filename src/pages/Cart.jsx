import React from "react";

import CartList from "../components/CartList/CartList";
import EmptyCart from "../components/CartList/EmptyCart";

export default function Cart({
  itemsData,
  isLoading,
  setShowSearch,
  setShowButtonCart,
  isEmptyCart,
}) {
  setShowSearch(false);
  setShowButtonCart(false);

  return (
    <section
      className="bg-yellow-100 min-h-[82vh] 
      p-2 sm:p-3 lg:p-8"
    >
      {isEmptyCart ? (
        <CartList itemsData={itemsData} isLoading={isLoading} />
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}
