import React from "react";

import CartList from "../components/CartList/CartList";
import EmptyCart from "../components/CartList/EmptyCart";

export default function Cart({items, isLoading}) {
  // eslint-disable-next-line
  const [itemCart, setItemCart] = React.useState([null]);

  return (
    <section className="bg-yellow-100 min-h-[82vh] 
      p-2 sm:p-3 lg:p-8">
      {itemCart ? <CartList items={items} isLoading={isLoading}/> : <EmptyCart />}
    </section>
  );
}
