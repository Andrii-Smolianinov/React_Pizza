import Filter from "./Filter";

const categories = [
  { text: "Усі" },
  { text: "Мясні" },
  { text: "Вегатеріанські" },
  { text: "Гриль" },
  { text: "Гострі" },
  { text: "Акційні" },
];

export default function Sort() {
  const elements = categories.map(({ text }) => (
    <li
      key={text}
      className="
      inline-block
      py-[2px]
      px-[8px]
      m-1
      md:px-[15px]
      md:m-2 
      lg:px-[25px]
      lg:m-3  
      font-bold
      rounded-xl
      cursor-pointer
      bg-green-300 hover:bg-red-200
      text-red-600 hover:text-green-600
      transition-all duration-350
      "
    >
      {text}
    </li>
  ));

  return (
    <div
      className="
      flex 
      flex-wrap      
      px-8 
      py-6
      items-center
      justify-between
      border-t-2      
      border-red-600 
      bg-yellow-100"
    >
      <ul
        className="
        flex 
        flex-wrap
        justify-start
        "
      >
        {elements}
      </ul>
      <Filter />
    </div>
  );
}
