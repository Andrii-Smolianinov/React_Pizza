import data from "../data/data.json"
console.log(data);


const categories = [{ text: "Тонкі" }, { text: "Традиційні" }];
const diameters = [{ text: "26см" }, { text: "30см" }, { text: "40см" }];

export default function PizzaItem() {
  const elementsCategorie = categories.map(({ text }) => (
    <li key={text}>{text}</li>
  ));

  const elementDiameter = diameters.map(({ text }) => (
    <li key={text}>{text}</li>
  ));

  return (
    <li
      className="
    flex-col 
    border-solid 
    border-2
    rounded-md 
    border-indigo-600
    bg-amber-50
    max-w-[280px]
    h-[460px]
    "
    >
      <img src="" alt=""></img>
      <h2>Name</h2>
      <div>
        <ul className="flex">{elementsCategorie}</ul>
        <ul className="flex">{elementDiameter}</ul>
      </div>
      <div>
        <p>price</p>
        <button type="button">button</button>
      </div>
    </li>
  );
}
