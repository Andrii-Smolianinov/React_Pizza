import React from "react";
import { useSelector } from "react-redux";

import CartList from "../components/Cart/CartList";
import EmptyCart from "../components/Cart/EmptyCart";
import { AppContext } from "../App";
import { selectCart } from "../redux/slices/cartSlice";

export default function Cart() {
  const { setShowSearch, setShowButtonCart } = React.useContext(AppContext);
  const { itemsCart } = useSelector(selectCart);

  React.useEffect(() => {
    setShowSearch(false);
    setShowButtonCart(false);
  });

  return (
    <section
      className="bg-yellow-100 min-h-[82vh]
      px-2 sm:px-10 lg:px-20 xl:px-40
      py-1"
    >
      {itemsCart.length > 0 ? <CartList /> : <EmptyCart />}
    </section>
  );
}
