import React from "react";

import PizzaList from "../components/PizzaList/PizzaList";
import Sort from "../components/Sort/Sort";
import { AppContext } from "../App";

export default function Home() {
  const { setShowSearch, setShowButtonCart } = React.useContext(AppContext);

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
