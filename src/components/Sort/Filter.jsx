export default function Filter() {
  return (
    <div className="flex">
      <p>Сортування по:</p>
      <select name="select-category">
        <option value="1">популярності</option>
        <option value="1">по ціні</option>
        <option value="1">по назві</option>
      </select>
    </div>
  );
}
