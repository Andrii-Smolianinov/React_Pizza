import React from "react";

import PizzaList from "../components/PizzaList/PizzaList";
import Sort from "../components/Sort/Sort";

export default function Home({ items, isLoading }) {
  return (
    <div className="bg-yellow-100">
      <Sort />
      <PizzaList items={items} isLoading={isLoading} />
    </div>
  );
}
