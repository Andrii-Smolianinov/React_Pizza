import React from "react";
import { Link } from "react-router-dom";

import { SearchPizza, ButtonCart, ChangeLanguage } from "../index";

import logoJPG from "../../assets/img/newlogo.png";

type HeaderProps = {
  showSearch: boolean | null;
  showButtonCart: boolean | null;
};

const Header: React.FC<HeaderProps> = ({ showSearch, showButtonCart }) => {
  return (
    <header
      className="flex flex-wrap items-center justify-between
      p-2 sm:p-3 lg:p-4"
    >
      <Link to="/" className="cursor-pointer flex items-center">
        <img
          src={logoJPG}
          alt="Logo company"
          className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 m-1"
        />
        <span className="uppercase font-black sm:text-xl lg:text-3xl drop-shadow-lg ml-2">
          <span className="text-lime-600">rea</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-red-700">
            ctpi
          </span>
          <span className="text-red-700">zza</span>
        </span>
      </Link>

      {showSearch && <SearchPizza />}

      <div
        className="flex items-center justify-between 
        w-full md:w-64 lg:w-72"
      >
        <ChangeLanguage />
        {showButtonCart && <ButtonCart />}
      </div>
    </header>
  );
};

export default Header;
