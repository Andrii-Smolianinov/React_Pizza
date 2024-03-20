import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sale from "./Sale";
import ButtonOrder from "../../Buttons/ButtonOrder";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, setTotalPrice } from "../../../redux/slices/cartSlice";
import { selectChangeLang } from "../../../redux/slices/changeLangSlice";
import { selectCart } from "../../../redux/slices/cartSlice";

const diameters = ["26", "30", "40"];

type Props = {
  id: string;
  images: string;
  tittle: string;
  price: number;
  category: number[];
};

const PizzaItem: React.FC<Props> = ({ id, images, tittle, price, category }) => {
  const [activeDiameter, setActiveDiameter] = React.useState(0);
  const { activeIndexLang } = useSelector(selectChangeLang);
  const { itemsCart } = useSelector(selectCart);

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

  const findItem = itemsCart.find(
    (item) => item.price === price[activeDiameter]
  );
  const orderCount = findItem ? findItem.count : 0;

  return (
    <li
      key={id}
      className="flex-col w-[280px] h-[450px] border-solid border-2 rounded-md border-cyan-800 bg-amber-50 
      overflow-hidden group hover:shadow-lg hover:shadow-cyan-600/90 transition-all duration-300"
    >
      <Link to={`/pizza/${id}`}>
        <div className="relative overflow-hidden">
          <img
            className="group-hover:scale-110 transition-all duration-350"
            src={images}
            height={184}
            width={276}
            alt="element pizza"
          ></img>

          {category?.find((element) => element === 5) && <Sale />}
        </div>

        <h2 className="text-center my-8 text-2xl font-black text-cyan-800 h-[36px]">
          {tittle[activeIndexLang]}
        </h2>
      </Link>

      <div className="border-solid border-2 border-teal-500">
        <p className="flex justify-center border-solid border-2 border-teal-500 bg-teal-500 text-cyan-100">
          {t("diametr")}
        </p>
        <ul className="flex justify-center border-solid border-2 border-teal-500 bg-teal-500">
          {diameters.map((diameter, index) => (
            <li
              key={index}
              onClick={() => setActiveDiameter(index)}
              className={`p-1 mx-1 font-bold rounded ${
                activeDiameter === index
                  ? "bg-cyan-200"
                  : "hover:bg-cyan-300 transition-all"
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
        <p className="ml-5 text-2xl font-black text-cyan-800">
          {price[activeDiameter]} {t("uah")}
        </p>
        {findItem ? (
          <ButtonOrder
            onClickAddToCart ={onClickAddToCart}
            orderCount={orderCount}
          />
        ) : (
          <ButtonOrder onClickAddToCart={onClickAddToCart} />
        )}
      </div>
    </li>
  );
};

export default PizzaItem;
