import React from "react";
import { useSelector } from "react-redux";

import { PizzaList, Filter, ErrorServer } from "../components";

import { useAppState } from "../hooks/useAppState";

import { selectPizzas } from "../redux/slices/fetchPizzas/pizzasSlice";
import { Status } from "../redux/slices/fetchPizzas/pizzasTypes";

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
      {status === Status.ERROR ? <ErrorServer /> : <PizzaList />}
    </main>
  );
};

export default Home;
