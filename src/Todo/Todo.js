import { useState } from "react";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      name: "First",
    },
    {
      id: 2,
      name: "Second",
    },
    {
      id: 3,
      name: "Third",
    },
  ]);
  const [text, setText] = useState("Hello");

  const onInputChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onInputChange}></input>
      <button>Add User</button>
    </div>
  );
}
