import React from "react";

import PizzaList from "../components/PizzaList/PizzaList";
import Sort from "../components/Sort/Sort";

export default function Home({ items, isLoading }) {
  return (
    <main className="bg-yellow-100">
      <Sort />
      <PizzaList items={items} isLoading={isLoading} />
    </main>
  );
}
