import React from "react";
export default function Cart() {
  const [tasks, setTasks] = React.useState([{ text: "new task" }]);
  const onClickButton = function () {
    const text = prompt("add task");    
    setTasks([...tasks, { text }]);
  };

  const onClickRemove = function (index) {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const onClickEdit = function (index) {
    const text = prompt("edit task");
    setTasks(
      tasks.map((obj, i) => {
        if (index === i) {
          return { ...obj, text: text };
        }
        return obj;
      })
    );
  };

  const element = tasks.map((task, index) => (
    <li key={index} className="border inline-flex m-2 p-1">
      {task.text}
      <button onClick={() => onClickRemove(index)} className="border">X</button>
      <button onClick={() => onClickEdit(index)} className="border">edit</button>
    </li>
  ));

  return (
    <>
      <ul>{element}</ul>
      <button onClick={onClickButton} className="border">add task</button>
    </>
  );
}
