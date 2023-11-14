import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, setTotalPrice } from "../../../redux/slices/cartSlice";
const diameters = ["26", "30", "40"];

export default function PizzaItem({ id, images, tittle, price }) {
  const [activeDiameter, setActiveDiameter] = React.useState(0);

  const dispatch = useDispatch();

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
      <div className="overflow-hidden">
        <img
          className="w-full h-[184px] group-hover:scale-110 transition-all duration-350"
          src={images}
          alt="element pizza"
        ></img>
      </div>
      <h2 className="text-center my-8 text-2xl font-bold text-red-600">
        {tittle}
      </h2>
      <div className="border-solid border-2 border-rose-300">
        <p className="flex justify-center border-solid border-2 border-rose-300 bg-rose-300 text-red-600">
          Виберіть діаметр піци
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
                <span className="font-serif">{diameter}</span>см
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-around items-center my-5">
        <p className="ml-5 text-2xl font-medium">
          {price[activeDiameter]} грн<span className="font-serif">.</span>
        </p>
        <button
          className="p-3 font-bold border-2 rounded-md border-rose-300 hover:bg-rose-300 hover:text-amber-50 transition-all duration-350"
          type="button"
          onClick={onClickAddToCart}
        >
          Замовити
        </button>
      </div>
    </li>
  );
}
