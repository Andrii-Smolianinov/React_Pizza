import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonComeBack from "./ButtonComeBack";

const FullPizzaComponent = () => {
  const shouldLog = useRef(true);
  const [pizza, setPizza] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      async function fetchPizza() {
        try {
          const { data } = await axios.get(
            "https://64fad951cb9c00518f7a461b.mockapi.io/items/" + id
          );
          setPizza(data);
        } catch (error) {
          alert("Такої піци не існує!");
          navigate("/");
        }
      }
      fetchPizza();
    }
    // eslint-disable-next-line
  }, []);

  if (!pizza) {
    return "Loading";
  }

  return (
    <div>
      <ButtonComeBack tittle={"Назад до головного меню"} />
      <div className="flex">
        <div>
          <img src={pizza.images} alt="PizzaImage" />
          <h2>{pizza.tittle}</h2>
        </div>
        <div>
          <p>{pizza.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FullPizzaComponent;
