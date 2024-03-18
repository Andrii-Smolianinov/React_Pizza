import React from "react";
import { Link } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";

type Props = {
  tittle: string;
};

const ButtonComeBack: React.FC<Props> = ({ tittle }) => {
  return (
    <Link
      to="/"
      className="inline-flex py-px items-center rounded-xl        
        font-medium  
        px-2 lg:px-3
        text-base sm:text-lg lg:text-xl
        bg-lime-700 text-green-200
        hover:bg-lime-200 hover:text-green-700 transition duration-300"
    >
      <IoReturnUpBackSharp className="mr-2" />
      {tittle}
    </Link>
  );
};

export default ButtonComeBack;
