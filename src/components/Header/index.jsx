import { Link } from "react-router-dom";

import SearchPizza from "./SearchPizza";
import ButtonCart from "../ButtonCart";
import ChangeLanguage from "./ChangeLanguage";

import logoJPG from "../../assets/img/logo.jpg";

export default function Header({ showSearch, showButtonCart }) {
  return (
    <header
      className="flex flex-wrap items-center justify-between bg-yellow-100 border-b-2 border-red-600
      p-2 sm:p-3 lg:p-4"
    >
      <Link to="/" className="cursor-pointer flex items-center">
        <img
          src={logoJPG}
          alt="logo"
          className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 m-1"
        />
        <span className="uppercase font-extrabold text-base sm:text-xl lg:text-3xl drop-shadow-lg ml-2">
          <span className="text-lime-600">rea</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-red-600">
            ctpi
          </span>
          <span className="text-red-600">zza</span>
        </span>
      </Link>
      {showSearch && <SearchPizza />}
      <ChangeLanguage />
      {showButtonCart && <ButtonCart />}
    </header>
  );
}
