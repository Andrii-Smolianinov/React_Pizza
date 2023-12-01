import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Promotion from "./Promotion";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, setTotalPrice } from "../../../redux/slices/cartSlice";
import { selectSort } from "../../../redux/slices/sortSlice.js";

const diameters = ["26", "30", "40"];

export default function PizzaItem({ id, images, tittle, price }) {
  const [activeDiameter, setActiveDiameter] = React.useState(0);
  const { activeIndexLang } = useSelector(selectSort);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onClickAddToCart = () => {
    const item = {
      id,
      images,
      tittle,
      count: 1,
      price: price[activeDiameter],
      itemPrice: price[activeDiameter],
      selectDiameter: diameters[activeDiameter],
    };

    dispatch(addItemToCart(item));
    dispatch(setTotalPrice(price[activeDiameter]));
  };

  return (
    <li
      key={id}
      className="flex-col w-[280px] h-[450px] border-solid border-2 rounded-md border-rose-600 bg-amber-50 
      overflow-hidden group hover:shadow-lg hover:shadow-indigo-500/90 transition-all duration-300"
    >
      <Link to={`/pizza/${id}`}>
        <div className="relative overflow-hidden">
          <img
            className="w-full h-[184px] group-hover:scale-110 transition-all duration-350"
            src={images}
            alt="element pizza"
          ></img>
          <Promotion />
        </div>
        <h2 className="text-center my-8 text-2xl font-black text-red-600 h-[36px]">
          {tittle[activeIndexLang]}
        </h2>
      </Link>

      <div className="border-solid border-2 border-rose-300">
        <p className="flex justify-center border-solid border-2 border-rose-300 bg-rose-300 text-red-600">
          {t("diametr")}
        </p>
        <ul className="flex justify-center border-solid border-2 border-rose-300 bg-rose-300">
          {diameters.map((diameter, index) => (
            <li
              key={index}
              onClick={() => setActiveDiameter(index)}
              className={`p-1 mx-1 font-bold rounded ${
                activeDiameter === index ? "bg-amber-50" : "hover:bg-rose-200"
              }`}
            >
              <button>
                {diameter}
                {t("sm")}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-around items-center my-5">
        <p className="ml-5 text-2xl font-black">
          {price[activeDiameter]} {t("uah")}
        </p>
        <button
          className="p-3 font-bold border-2 rounded-md border-rose-300 hover:bg-rose-300 hover:text-amber-50 transition-all duration-350"
          type="button"
          onClick={onClickAddToCart}
        >
          {t("order")}
        </button>
      </div>
    </li>
  );
}
