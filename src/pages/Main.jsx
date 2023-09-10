import PizzaList from "../components/PizzaList/PizzaList";

export default function Main({items}) {
  return (
    <div
      className="
    bg-yellow-100"
    >
      <PizzaList items={items}/>
    </div>
  );
}
