import React from "react";

import PizzaItem from "./PizzaItem/PizzaItem";
import Skeleton from "./PizzaItem/Skeleton";

export default function PizzaList({ items, isLoading }) {
  return (
    <ul className="flex flex-wrap justify-center min-h-[65vh]
    p-2 sm:p-3 lg:p-8 
    gap-3 sm:gap-6 lg:gap-8">
      {isLoading ? (
        [...new Array(5)].map((_, index) => <Skeleton key={index} />)
      ) : (
        <PizzaItem items={items} />
      )}
    </ul>
  );
}
