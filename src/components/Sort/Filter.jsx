export default function Filter() {
  return (
    <div className="flex">
      <p>Сортування по:</p>
      <select className="
      bg-transparent
      font-bold
      mb-[5px]
      ml-2
      cursor-pointer
      " name="select-category">
        <option value="1">популярності</option>
        <option value="1">ціні</option>
        <option value="1">назві</option>
      </select>
    </div>
  );
}
