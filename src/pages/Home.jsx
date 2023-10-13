import React from "react";

import PizzaList from "../components/PizzaList/PizzaList";
import Sort from "../components/Sort/Sort";

export default function Home({ setShowSearch, setShowButtonCart }) {
  React.useEffect(() => {
    setShowSearch(true);
    setShowButtonCart(true);
  });

  return (
    <main className="bg-yellow-100">
      <Sort />
      <PizzaList />
    </main>
  );
}
