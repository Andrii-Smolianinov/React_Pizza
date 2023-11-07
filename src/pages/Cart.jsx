import React from "react";
import { useSelector } from "react-redux";

import CartList from "../components/Cart/CartList";
import EmptyCart from "../components/Cart/EmptyCart";
import { AppContext } from "../App";

export default function Cart() {
  const { setShowSearch, setShowButtonCart } = React.useContext(AppContext);
  const { itemsCart } = useSelector((state) => state.cart);

  React.useEffect(() => {
    setShowSearch(false);
    setShowButtonCart(false);
  });

  return (
    <section
      className="bg-yellow-100 min-h-[82vh] 
      p-2 sm:p-3 lg:p-8"
    >
      {itemsCart.length > 0 ? <CartList /> : <EmptyCart />}
    </section>
  );
}
