import PizzaItem from "./PizzaItem";

export default function PizzaList() {
  return (
    <ul className="p-[40px] flex flex-wrap gap-8 justify-center">     
      <PizzaItem />
    </ul>
  );
}
