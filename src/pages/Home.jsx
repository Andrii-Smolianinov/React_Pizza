import React from "react";

import PizzaList from "../components/PizzaList/PizzaList";
import Sort from "../components/Sort/Sort";

export default function Home({
  items,
  isLoading,
  activeIndexSort,
  setActiveIndexSort,
  activeTypePizza,
  setActiveTypePizza,
  selectCategory,
  setSelectCategory,
}) {
  return (
    <main className="bg-yellow-100">
      <Sort
        activeIndexSort={activeIndexSort}
        setActiveIndexSort={setActiveIndexSort}
        activeTypePizza={activeTypePizza}
        setActiveTypePizza={setActiveTypePizza}
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />
      <PizzaList items={items} isLoading={isLoading} />
    </main>
  );
}
