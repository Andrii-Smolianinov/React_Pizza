import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Sale, ButtonOrder } from "../../index";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, setTotalPrice, selectCart } from "../../../redux/slices/cart/cartSlice";
import { selectChangeLang } from "../../../redux/slices/changeLang/changeLangSlice";

const diameters = ["26", "30", "40"];

type PizzaItemProps = {
  id: string;
  images: string;
  tittle: string;
  price: number;
  categories: number[];
};

const PizzaItem: React.FC<PizzaItemProps> = ({
  id,
  images,
  tittle,
  price,
  categories,
}) => {
  const [activeDiameter, setActiveDiameter] = React.useState(0);
  const { activeIndexLang } = useSelector(selectChangeLang);
  const { itemsCart } = useSelector(selectCart);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onClickAddToCart = () => {
    type ItemAddToCart = {
      id: string;
      images: string;
      tittle: string;
      count: number;
      price: number;
      itemPrice: number;
      selectDiameter: string;
    };

    const item: ItemAddToCart = {
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
            className="max-h-[184px] bg-cover bg-center transition-all duration-300 group-hover:scale-110"
            src={images}
            height={184}
            width={276}
            alt="element pizza"
          ></img>

          {categories?.find((element) => element === 5) && <Sale />}
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
            onClickAddToCart={onClickAddToCart}
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
