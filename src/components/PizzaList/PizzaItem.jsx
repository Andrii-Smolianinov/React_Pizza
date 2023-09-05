import React from "react";
import pizzasData from "../../assets/data/data.json";

const categories = [{ text: "тонкі" }, { text: "традиційні" }];
const diameters = [{ text: "26см" }, { text: "30см" }, { text: "40см" }];

export default function PizzaItem() {
  const [activeType, setActiveType] = React.useState(0);
  const [activeDiameter, setActiveDiameter] = React.useState(0);

  const elementsCategorie = categories.map(({ text }, index) => (
    <li
      key={text}
      onClick={() => setActiveType(index)}
      className={`p-1 mx-1 font-bold rounded ${
        activeType === index ? "bg-amber-50" : "hover:bg-rose-200"
      }`}
    >
      <button>{text}</button>
    </li>
  ));

  const elementDiameter = diameters.map(({ text }, index) => (
    <li key={text}
      onClick={() => setActiveDiameter(index)}
      className={`p-1 mx-1 font-bold rounded ${
        activeDiameter === index ? "bg-amber-50" : "hover:bg-rose-200"
      }`}
      
    >
      <button>{text}</button>
    </li>
  ));

  return pizzasData.map(({ id, images, tittle, price }) => (
    <li
      key={id}
      className="
    flex-col max-w-[280px] h-[450px] border-solid border-2 rounded-md border-rose-600 bg-amber-50 overflow-hidden   
    hover:shadow-lg hover:shadow-indigo-500/90 transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition-all duration-350"
          src={images}
          alt=""
        ></img>
      </div>
      <h2 className="text-center my-8 text-2xl font-extrabold italic text-red-600">
        {tittle}
      </h2>
      <div className="border-solid border-2 border-rose-300">
        <ul className="flex justify-center border-solid border-2 border-rose-300 bg-rose-300">
          {
            elementsCategorie
            // <li
            //   onClick={() => setActiveType(index)}
            //   className={`p-1 mx-1 font-bold rounded ${
            //     activeType === index ? "bg-amber-50" : "hover:bg-rose-200"
            //   }`}
            //   key={index}
            // >
            //   <button>{categories[index]}</button>
            // </li>
          }
        </ul>
        <ul className="flex justify-center border-solid border-2 border-rose-300 bg-rose-300">
          {
            elementDiameter
            // <li
            //   onClick={() => setActiveDiameter(index)}
            //   className={`p-1 mx-1 font-bold rounded ${
            //     activeDiameter === index ? "bg-amber-50" : "hover:bg-rose-200"
            //   }`}
            //   key={index}
            // >
            //   <button>{size}см.</button>
            // </li>
          }
        </ul>
      </div>
      <div className="flex justify-around items-center my-5">
        <p className="ml-5 text-2xl font-extrabold">{price} грн.</p>
        <button
          className="p-3 font-bold border-2 rounded-md border-rose-300 hover:bg-rose-300 hover:text-amber-50 transition-all duration-350"
          type="button"
        >
          Замовити <span>1</span>
        </button>
      </div>
    </li>
  ));
}
