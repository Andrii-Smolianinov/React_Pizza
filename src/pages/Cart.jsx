import React from "react";

import CartItem from "../components/CartList/CartItem";
import EmptyCart from "../components/CartList/EmptyCart";

export default function Cart() {
  // eslint-disable-next-line
  const [itemCart, setItemCart] = React.useState(null);

  return (
    <div className="bg-yellow-100 px-8 py-10">
      
      {itemCart ? (
        <ul>
          <CartItem />
        </ul>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
