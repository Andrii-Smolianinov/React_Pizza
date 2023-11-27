import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonComeBack from "./ButtonComeBack";
import ImagePizza from "../assets/img/id-not-found.png";

const FullPizzaComponent = () => {
  const showDoubleRender = useRef(true);
  const [pizza, setPizza] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

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
    <div>
      <div className="my-4">
        <ButtonComeBack tittle={"Назад до головного меню"} />
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
              {pizza.tittle}
            </h2>
          </div>
        </div>
        <div>
          <p className="max-w-[800px] font-mono font-semibold text-justify ml-14 mr-8">
            {pizza.description}
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
