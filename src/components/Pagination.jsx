import React from "react";
import { AppContext } from "../App";

const Pagination = ({ totalPizzas, pizzasPerPage, paginate }) => {
  const { paginationCurrentPage } = React.useContext(AppContext);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPizzas / pizzasPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="bg-emerald-400  m-1"
          >
            <a href={`#page/${paginationCurrentPage}`} className="inline-flex justify-center cursor-pointer w-10" 
            onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
