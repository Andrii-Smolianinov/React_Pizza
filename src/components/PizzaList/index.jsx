import React from "react";
import { useSelector } from "react-redux";

import PizzaItem from "./PizzaItem";
import Skeleton from "./PizzaItem/Skeleton";
import { selectSearch } from "../../redux/slices/searchSlice";
import { selectPizzas } from "../../redux/slices/pizzasSlice";

export default function PizzaList() {
  const { searchPizza } = useSelector(selectSearch);
  const { items, status } = useSelector(selectPizzas);

  return (
    <ul
      className="flex flex-wrap justify-center min-h-[65vh]
      p-2 sm:p-3 lg:p-8 
      gap-3 sm:gap-6 lg:gap-8"
    >
      {status === "loading"
        ? [...new Array(5)].map((_, index) => <Skeleton key={index} />)
        : items
            .filter((item) => {
              if (
                item.tittle.toLowerCase().includes(searchPizza.toLowerCase())
              ) {
                return true;
              }
              return false;
            })
            .map(({ id, images, tittle, price }) => (
              <PizzaItem
                key={id}
                id={id}
                images={images}
                tittle={tittle}
                price={price}
              />
            ))}
    </ul>
  );
}
