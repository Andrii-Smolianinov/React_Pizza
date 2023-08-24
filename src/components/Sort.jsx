const categories = [
  { text: "Усі" },
  { text: "Мясні" },
  { text: "Вегатеріанські" },
  { text: "Гриль" },
  { text: "Гострі" },
  { text: "Закриті" },
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
    bg-green-300 hover:bg-red-300
    transition-all duration-250
    "
    >
      {text}
    </li>
  ));

  return (
    <ul className="flex flex-wrap px-5 py-6 border-t border-red-600 bg-yellow-100 ">
      {elements}
    </ul>
  );
}
