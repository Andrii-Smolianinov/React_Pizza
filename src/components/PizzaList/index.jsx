import React from "react";
import { useSelector } from "react-redux";

import PizzaItem from "./PizzaItem";
import Skeleton from "./PizzaItem/Skeleton";
import Pagination from "../Pagination";

import { selectSearch } from "../../redux/slices/searchSlice";
import { selectPizzas } from "../../redux/slices/pizzasSlice";
import { selectChangeLang } from "../../redux/slices/changeLangSlice";

import { AppContext } from "../../App";

export default function PizzaList() {
  const { searchPizza } = useSelector(selectSearch);
  const { items, status } = useSelector(selectPizzas);
  const { activeIndexLang } = useSelector(selectChangeLang);

  const { pizzasPerPage, paginationCurrentPage, setPaginationCurrentPage } =
    React.useContext(AppContext);

  const lastPizzaIndex = paginationCurrentPage * pizzasPerPage;
  const firstPizzaIndex = lastPizzaIndex - pizzasPerPage;
  const currentPizza = items.slice(firstPizzaIndex, lastPizzaIndex);
  const totalPizzas = items.length;

  const paginate = (pageNumber) => setPaginationCurrentPage(pageNumber);

  return (
    <>
      <ul
        className="flex flex-wrap justify-center min-h-[65vh]
        p-2 sm:p-3 lg:p-8 
        gap-3 sm:gap-6 lg:gap-8"
      >
        {status === "loading"
          ? [...new Array(5)].map((_, index) => <Skeleton key={index} />)
          : currentPizza
              .filter((item) => {
                if (
                  item.tittle[activeIndexLang]
                    .toLowerCase()
                    .includes(searchPizza.toLowerCase())
                ) {
                  return true;
                }
                return false;
              })
              .map(({ id, images, tittle, price, category }) => (
                <PizzaItem
                  key={id}
                  id={id}
                  images={images}
                  tittle={tittle}
                  price={price}
                  category={category}
                />
              ))}
      </ul>
      <Pagination
        totalPizzas={totalPizzas}
        pizzasPerPage={pizzasPerPage}
        paginate={paginate}
      />
    </>
  );
}
