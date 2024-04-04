import React from "react";
import { useSelector } from "react-redux";

import CartList from "../components/Cart/CartList";
import EmptyCart from "../components/Cart/EmptyCart";

import { useAppState } from "../hooks/useAppState";

import { selectCart } from "../redux/slices/cart/cartSlice";

const Cart: React.FC = () => {
  const { setShowSearch, setShowButtonCart } = useAppState();
  const { itemsCart } = useSelector(selectCart);

  React.useEffect(() => {
    setShowSearch(false);
    setShowButtonCart(false);
  });

  return (
    <section
      className="min-h-[82vh] py-1
      px-2 sm:px-10 lg:px-20 xl:px-40"
    >
      {itemsCart.length > 0 ? <CartList /> : <EmptyCart />}
    </section>
  );
};

export default Cart;
