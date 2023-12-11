import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

import { useSelector } from "react-redux";
import { selectChangeLang } from "../redux/slices/changeLangSlice";

import ButtonComeBack from "./Buttons/ButtonComeBack";
import ImagePizza from "../assets/img/id-not-found.png";

const FullPizzaComponent = () => {
  const { activeIndexLang } = useSelector(selectChangeLang);
  const showDoubleRender = useRef(true);
  const [pizza, setPizza] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (showDoubleRender.current) {
      showDoubleRender.current = false;

      async function fetchPizza() {
        try {
          const { data } = await axios.get(
            "https://64fad951cb9c00518f7a461b.mockapi.io/items/" + id
          );
          setPizza(data);
        } catch (error) {
          alert("Ооу, не чуди! Такого id піци не існує");
          navigate("/");
        }
      }
      fetchPizza();
    }
    // eslint-disable-next-line
  }, []);

  if (!pizza) {
    return "Loading...";
  }

  return (
    <div className="h-[81vh]">
      <div className="my-4">
        <ButtonComeBack tittle={t("backMain")} />
      </div>
      <div className="flex flex-col sm:flex-row justify-start mt-4">
        <div className="relative h-[335px]">
          <img
            src={pizza.images}
            alt="PizzaImage"
            className="block w-[full] max-h-[335px]"
          />
          <div className="absolute w-full h-1/5 bottom-0 bg-slate-800 opacity-80 ">
            <h2 className="text-center font-bold text-2xl uppercase pt-4 tracking-wider text-sky-400">
              {pizza.tittle[activeIndexLang]}
            </h2>
          </div>
        </div>
        <div className="">
          <p className="w-[90vw] sm:w-[80vw] lg:w-1/2 font-semibold text-justify">
            {pizza.description[activeIndexLang]}
          </p>
        </div>
        <img
          src={ImagePizza}
          alt="PizzaImage"
          className="block invisible lg:visible lg:w-[300px] lg:max-h-[335px]"
        />
      </div>
    </div>
  );
};

export default FullPizzaComponent;
