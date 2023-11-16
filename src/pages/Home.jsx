import React from "react";
import { useSelector } from "react-redux";

import PizzaList from "../components/PizzaList";
import Filter from "../components/Sort/Filter";
import ErrorServer from "../components/ErrorServer";
import { AppContext } from "../App";

export default function Home() {
  const { setShowSearch, setShowButtonCart } = React.useContext(AppContext);
  const status = useSelector((state) => state.pizzas.status);

  React.useEffect(() => {
    setShowSearch(true);
    setShowButtonCart(true);
  });

  return (
    <main className="bg-yellow-100">
      {status === "error" ? (
        <ErrorServer />
      ) : (
        <>
          <Filter />
          <PizzaList />
        </>
      )}
    </main>
  );
}
