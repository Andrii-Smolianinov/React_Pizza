import React from "react";

import PizzaItem from "./PizzaItem/PizzaItem";
import Skeleton from "./PizzaItem/Skeleton";

export default function PizzaList({ items, isLoading }) {
  return (
    <ul className="p-[40px] flex flex-wrap gap-8 justify-center">
      {isLoading ? (
        [...new Array(10)].map((_, index) => <Skeleton key={index} />)
      ) : (
        <PizzaItem items={items} />
      )}
    </ul>
  );
}
