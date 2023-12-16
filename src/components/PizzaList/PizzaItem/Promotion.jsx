import React from "react";

import { useSelector } from "react-redux";
import { selectChangeLang } from "../../../redux/slices/changeLangSlice";

import ukrIMG from "../../../assets/img/promotion-ukr.png";
import engIMG from "../../../assets/img/promotion-eng.png";

const Promotion = () => {
  const { activeIndexLang } = useSelector(selectChangeLang);
  return (
    <div className="absolute w-[276px] h-1/5 top-0">
      <img
        src={activeIndexLang === 0 ? ukrIMG : engIMG}
        alt="logo promotion"               
        className="absolute w-1/2 h-[75px] left-1/4 opacity-80"
      />
    </div>
  );
};

export default Promotion;
