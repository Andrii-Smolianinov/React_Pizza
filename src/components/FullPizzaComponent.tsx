import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

import { useSelector } from "react-redux";
import { selectChangeLang } from "../redux/slices/changeLang/changeLangSlice";

import ButtonComeBack from "./Buttons/ButtonComeBack";
import Loader from "./Loader";
import ImagePizza from "../assets/img/id-not-found.png";

const FullPizzaComponent: React.FC = () => {
  interface useStatePizzaProps {
    images: string;
    tittle: string;
    description: string;
  }
  
  const [pizza, setPizza] = useState<useStatePizzaProps>();
  const { activeIndexLang } = useSelector(selectChangeLang);
  const showDoubleRender = useRef(true);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams();

  useEffect(() => {
    if (showDoubleRender.current) {
      showDoubleRender.current = false;

      async function fetchPizza() {
        try {
          const { data } = await axios.get(
            `https://${process.env.PUBLIC_API_KEY}.mockapi.io/items/` + id
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
    return <Loader />;
  }

  return (
    <div className="">
      <div className="my-4 ml-5">
        <ButtonComeBack tittle={t("backMain")} />
      </div>
      <div
        className="flex flex-col sm:flex-row justify-center 
        mt-8 sm:mt-16"
      >
        <div
          className="relative h-[335px] 
          w-full sm:w-1/2 lg:w-1/4"
        >
          <img
            src={pizza.images}
            alt="PizzaImage"
            className="block h-full w-full"
          />
          <div
            className="absolute bottom-0 bg-slate-800 opacity-80 
            w-full"
          >
            <h2
              className="text-center font-bold text-2xl uppercase tracking-wider text-sky-400
              py-3"
            >
              {pizza.tittle[activeIndexLang]}
            </h2>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/6">
          <p
            className="font-semibold text-justify          
            mt-8 sm:mt-0         
            pl-2 sm:pl-4 md:pl-8 lg:pl-14 
            pr-2 sm:pr-4 md:pr-8 lg:pr-14"
          >
            {pizza.description[activeIndexLang]}
          </p>
        </div>
        <img
          src={ImagePizza}
          alt="Pizza Images"
          className="invisible lg:visible
          w-0 lg:w-64 h-72 "
        />
      </div>
    </div>
  );
};

export default FullPizzaComponent;
