import React from "react";
import { useSelector } from "react-redux";

import { PizzaItem, Skeleton, Pagination } from "../index";

import { selectSearch } from "../../redux/slices/search/searchSlice";
import { selectPizzas } from "../../redux/slices/fetchPizzas/pizzasSlice";
import { Status } from "../../redux/slices/fetchPizzas/pizzasTypes";
import { selectChangeLang } from "../../redux/slices/changeLang/changeLangSlice";
import { selectPagination } from "../../redux/slices/pagination/paginationSlice";

import { useAppState } from "../../hooks/useAppState";

const PizzaList: React.FC = () => {
  const { searchPizza } = useSelector(selectSearch);
  const { items, status } = useSelector(selectPizzas);
  const { activeIndexLang } = useSelector(selectChangeLang);
  const { currentPage } = useSelector(selectPagination);
  const { pizzasPerPage } = useAppState();

  const lastPizzaIndex = currentPage * pizzasPerPage;
  const firstPizzaIndex = lastPizzaIndex - pizzasPerPage;
  const currentPizza = items.slice(firstPizzaIndex, lastPizzaIndex);
  const totalPizzas: number = items.length;

  return (
    <>
      <ul
        className="flex flex-wrap justify-center 
        p-2 sm:p-3 lg:p-8 
        gap-3 sm:gap-6 lg:gap-8"
      >
        {status === Status.LOADING &&
          [...new Array(5)].map((_, index) => <Skeleton key={index} />)}
        {searchPizza
          ? items
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
              .map(({ id, images, tittle, price, categories }) => (
                <PizzaItem
                  key={id}
                  id={id}
                  images={images}
                  tittle={tittle}
                  price={price}
                  categories={categories}
                />
              ))
          : currentPizza.map(({ id, images, tittle, price, categories }) => (
              <PizzaItem
                key={id}
                id={id}
                images={images}
                tittle={tittle}
                price={price}
                categories={categories}
              />
            ))}
      </ul>
      {!searchPizza && items.length > 10 && (
        <Pagination totalPizzas={totalPizzas} pizzasPerPage={pizzasPerPage} />
      )}
    </>
  );
};

export default PizzaList;
