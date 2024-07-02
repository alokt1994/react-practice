import React, { useState } from "react";

export default function TextField() {
  const [text, setText] = useState("Hello");
  function onInputChange(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <input type="text" value={text} onChange={onInputChange}></input>
      <button onClick={() => setText("")}>Rest</button>
      <p>Input value: {text}</p>
    </div>
  );
}
