import React from "react";
import { useSelector } from "react-redux";

import PizzaList from "../components/PizzaList";
import Filter from "../components/Sort/Filter";
import ErrorServer from "../components/ErrorServer";
import { AppContext } from "../App";
import { selectPizzas } from "../redux/slices/pizzasSlice";
import Pagination from "../components/Pagination";

export default function Home() {
  const { setShowSearch, setShowButtonCart } = React.useContext(AppContext);
  const { status } = useSelector(selectPizzas);

  React.useEffect(() => {
    setShowSearch(true);
    setShowButtonCart(true);    
  });

  return (
    <main className="bg-yellow-100">
      <Filter />
      {status === "error" ? <ErrorServer /> : <PizzaList />}
      <Pagination/>
    </main>
  );
}
