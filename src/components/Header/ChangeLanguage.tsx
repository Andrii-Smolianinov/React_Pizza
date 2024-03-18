import React from "react";
import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";
import {
  setSelectLang,
  setActiveIndexLang,
} from "../../redux/slices/changeLangSlice";

import UAflag from "../../assets/img/ua-flag.png";
import GBflag from "../../assets/img/gb-flag.png";

const ChangeLanguage: React.FC = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const onChangeLanguage = (language:string, index:number) => {
    i18n.changeLanguage(language);
    dispatch(setSelectLang(language));
    dispatch(setActiveIndexLang(index));
  };

  return (
    <div className="mt-2">
      <button onClick={() => onChangeLanguage("ua", 0)}>
        <img src={UAflag} alt="Ukraine flag" width={36} height={32} className="hover:scale-y-110 lg:hover:scale-y-125 hover:scale-x-105 transition-all duration-300"></img>
      </button>
      <button onClick={() => onChangeLanguage("en", 1)}>
        <img src={GBflag} alt="Great Britan flag" width={36} height={32} className="ml-px hover:scale-y-110 lg:hover:scale-y-125 hover:scale-x-105 transition-all duration-300"></img>
      </button>
    </div>
  );
};

export default ChangeLanguage;
