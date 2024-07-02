import React, { useState } from "react";

export default function TwoVariable() {
  const [text, settext] = useState("Alex");
  const [count, setCount] = useState(42);
  function onChangeInput(e) {
    settext(e.target.value);
  }
  return (
    <div>
      <input type="text" value={text} onChange={onChangeInput}></input>
      <button onClick={() => setCount(count + 1)}>
        Increment age to {text}
      </button>
      <p>
        My Name is {text} and my age is {count}
      </p>
    </div>
  );
}
