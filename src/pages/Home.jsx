import React from "react";

import PizzaList from "../components/PizzaList/PizzaList";
import Filter from "../components/Sort/Filter";
import { AppContext } from "../App";

export default function Home() {
  const { setShowSearch, setShowButtonCart } = React.useContext(AppContext);

  React.useEffect(() => {
    setShowSearch(true);
    setShowButtonCart(true);
  });

  return (
    <main className="bg-yellow-100">
      <Filter />
      <PizzaList />
    </main>
  );
}
