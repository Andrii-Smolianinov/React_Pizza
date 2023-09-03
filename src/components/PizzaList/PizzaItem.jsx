import React from "react";
import data from "../data/data.json";

const categories = [{ text: "тонкі" }, { text: "традиційні" }];
const diameters = [{ text: "26см" }, { text: "30см" }, { text: "40см" }];

export default function PizzaItem() {
const [count, setCount] = React.useState(0)

const onClickButton = function(){
  setCount(count + 1)
}
 
  const elementsCategorie = categories.map(({ text }) => (
    <li
      className="
    p-1 mx-1    
    font-bold
    rounded
    hover:bg-rose-100 focus:bg-rose-100"
      key={text}
    >
      <button>{text}</button>
    </li>
  ));

  const elementDiameter = diameters.map(({ text }) => (
    <li
      className="
    p-1 mx-1 
    font-bold
    rounded
    hover:bg-rose-100 focus:bg-rose-100"
      key={text}
    >
      <button>{text}</button>
    </li>
  ));

  return data.map((el) => (
    <li
      className="
      flex-col 
      max-w-[280px]
      h-[450px]
      border-solid 
      border-2
      rounded-md 
      border-rose-600
      bg-amber-50      
      overflow-hidden         
      hover:shadow-lg 
      hover:shadow-indigo-500/90
      transition-all duration-300      
      "
      key={el.id}
    >
      <div className="overflow-hidden">
        <img
          className="
          hover:scale-110 
          transition-all duration-350"
          src={el.avatar}
          alt=""
        ></img>
      </div>

      <h2
        className="
            text-center
            my-8
            text-2xl 
            font-extrabold 
            italic                          
            text-red-600"
      >
        {el.name}
      </h2>
      <div
        className="
            border-solid 
            border-2
            border-rose-300"
      >
        <ul
          className="
            flex
            justify-center                      
            border-solid 
            border-2
            border-rose-300
            bg-rose-300"
        >
          {elementsCategorie}
        </ul>
        <ul
          className="
            flex 
            justify-center                      
            border-solid 
            border-2
            border-rose-300
            bg-rose-300"
        >
          {elementDiameter}
        </ul>
      </div>
      <div
        className="
      flex
      justify-around
      items-center
      my-5"
      >
        <p
          className="
        ml-5
        text-2xl 
        font-extrabold"
        >
          {el.price} грн.
        </p>
        <button onClick={onClickButton}

          className="
          p-3        
          font-bold
          border-2
          rounded-md
          border-rose-300 
          hover:bg-rose-300
          hover:text-amber-50
          transition-all duration-350"

          type="button"
        >
          Замовити <span>{count}</span>
        </button>
      </div>
    </li>
  ));
}
