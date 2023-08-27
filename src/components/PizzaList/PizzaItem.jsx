export default function PizzaItem() {
  return (
    <div className="
    flex-col 
    border-solid 
    border-2
    rounded-md 
    border-indigo-600
    max-w-[280px]
    h-[460px]
    ">
      <img src="" alt=""></img>
      <h2>Name</h2>
      <div>
        <ul className="flex">
          <li>item 1</li>
          <li>item 2</li>
        </ul>
        <ul className="flex">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ul>
      </div>
      <div>
        <p>price</p>
        <button type="button">button</button>
      </div>
    </div>
  );
}
