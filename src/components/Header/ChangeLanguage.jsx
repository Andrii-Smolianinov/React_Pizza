import React from "react";
import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";
import {setSelectLang, setActiveIndexLang} from "../../redux/slices/sortSlice"

import UAflag from "../../assets/img/ua-flag.png";
import GBflag from "../../assets/img/gb-flag.png";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch()
  
  const onChangeLanguage = (language, index) => {
    i18n.changeLanguage(language);
    dispatch(setSelectLang(language)) ;
    dispatch(setActiveIndexLang(index)) 
  };

  return (
    <div>
      <button onClick={() => onChangeLanguage("ua", 0)}><img src={UAflag} alt="Ukraine flag" className="w-9 h-8"></img></button>
      <button onClick={() => onChangeLanguage("en", 1)}><img src={GBflag} alt="Great Britan flag" className="w-9 h-8"></img></button>
    </div>
  );
};

export default ChangeLanguage;
