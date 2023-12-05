import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectPizzas } from "../redux/slices/pizzasSlice";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState([]);
  const [pizzasPerPage] = useState(10);
  const { items } = useSelector(selectPizzas);

  const lastPizzaIndex = currentPage * pizzasPerPage;
  const firstPizzaIndex = lastPizzaIndex - pizzasPerPage;
  const currentPizza = items.slice(firstPizzaIndex, lastPizzaIndex);
  const pageNumbers = [];
  const totalPizzas = items.length

  for (let i = 1; i <= Math.ceil(totalPizzas / pizzasPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="!#">{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
