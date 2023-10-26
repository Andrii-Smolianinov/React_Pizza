import React from "react";

import PizzaItem from "./PizzaItem/PizzaItem";
import Skeleton from "./PizzaItem/Skeleton";
import { AppContext } from "../../App";

export default function PizzaList() {
  const { itemsData, isLoading } = React.useContext(AppContext);

  return (
    <ul
      className="flex flex-wrap justify-center min-h-[65vh]
    p-2 sm:p-3 lg:p-8 
    gap-3 sm:gap-6 lg:gap-8"
    >
      {isLoading ? (
        [...new Array(5)].map((_, index) => <Skeleton key={index} />)
      ) : (
        <PizzaItem itemsData={itemsData} />
      )}
    </ul>
  );
}
