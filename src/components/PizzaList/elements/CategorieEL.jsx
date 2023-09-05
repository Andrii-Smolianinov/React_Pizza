import React from "react";

const categories = ["тонкі", "традиційні"];

export default function CategorieEL() {
  const [activeCategory, setActiveCategory] = React.useState(0);

  return categories.map((category, index) => (
    <li
      key={index}
      onClick={() => setActiveCategory(index)}
      className={`p-1 mx-1 font-bold rounded ${
        activeCategory === index ? "bg-amber-50" : "hover:bg-rose-200"
      }`}
    >
      <button>{category}</button>
    </li>
  ));
}
