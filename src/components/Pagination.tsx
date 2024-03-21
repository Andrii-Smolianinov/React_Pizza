import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPagination,
  setActiveIndexPage,
  setCurrentPage,
} from "../redux/slices/paginationSlice";

type PaginationProps = {
  totalPizzas: number;
  pizzasPerPage: number;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPizzas,
  pizzasPerPage,
}) => {
  const { activeIndexPage, currentPage } = useSelector(selectPagination);
  const dispatch = useDispatch();
  const pageNumbers: number[] = [];

  const paginate = (pageNumber: number, index: number) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(setActiveIndexPage(index));
  };

  for (let i = 1; i <= Math.ceil(totalPizzas / pizzasPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex justify-center p-8">
      {pageNumbers.map((number, index) => (
        <li
          key={number}
          className={`m-1 rounded-md transition duration-300 ${
            activeIndexPage === index
              ? "bg-lime-700 text-green-200 hover:bg-lime-700"
              : "bg-lime-200 text-green-600 hover:bg-teal-500 hover:text-green-100"
          }`}
        >
          <a
            href={`#page/${currentPage}`}
            className="inline-flex justify-center cursor-pointer w-10"
            onClick={() => paginate(number, index)}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
