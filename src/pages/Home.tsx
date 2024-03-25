import React from "react";
import { useSelector } from "react-redux";

import PizzaList from "../components/PizzaList";
import Filter from "../components/Sort/Filter";
import ErrorServer from "../components/ErrorServer";

import { useAppState } from "../App";

import { selectPizzas } from "../redux/slices/pizzasSlice";

const Home: React.FC = () => {
  const { setShowSearch, setShowButtonCart } = useAppState();
  const { status } = useSelector(selectPizzas);

  React.useEffect(() => {
    setShowSearch(true);
    setShowButtonCart(true);
  });

  return (
    <main className="min-h-[83vh]">
      <Filter />
      {status === "error" ? <ErrorServer /> : <PizzaList />}
    </main>
  );
};

export default Home;
