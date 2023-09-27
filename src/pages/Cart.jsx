import React from "react";

import CartList from "../components/CartList/CartList";
import EmptyCart from "../components/CartList/EmptyCart";

export default function Cart({items, isLoading}) {
  // eslint-disable-next-line
  const [itemCart, setItemCart] = React.useState([null]);

  return (
    <div className="bg-yellow-100 px-8 py-10 min-h-[82vh]">
      {itemCart ? <CartList items={items} isLoading={isLoading}/> : <EmptyCart />}
    </div>
  );
}
