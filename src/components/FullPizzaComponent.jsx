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
          console.log(data);
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
    <div>
      <div className="my-4">
        <ButtonComeBack tittle={t("backMain")} />
      </div>
      <div className="flex justify-start mt-4">
        <div className="relative h-[335px]">
          <img
            src={pizza.images}
            alt="PizzaImage"
            className="block w-[500px] max-h-[335px]"
          />
          <div className="absolute w-[500px] h-1/5 bottom-0 bg-slate-800 opacity-80 ">
            <h2 className="text-center font-bold text-2xl uppercase pt-4 tracking-wider text-sky-400">
              {pizza.tittle[activeIndexLang]}
            </h2>
          </div>
        </div>
        <div>
          <p className="max-w-[800px] font-semibold text-justify ml-14 mr-8">
            {pizza.description[activeIndexLang]}
          </p>
        </div>
        <img
          src={ImagePizza}
          alt="PizzaImage"
          className="block w-[300px] max-h-[335px]"
        />
      </div>
    </div>
  );
};

export default FullPizzaComponent;
