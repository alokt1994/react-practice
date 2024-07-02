import React, { useState } from "react";

export default function ArrayObject() {
  const [text, setText] = useState({
    id: 1,
    name: "",
    lname: "",
    email: "",
  });
  return (
    <div>
      <label for="fname">First Name</label>
      <br />
      <input
        type="text"
        value={text.name}
        onChange={(e) => {
          setText({ ...text, name: e.target.value });
        }}
      ></input>
      <br />
      <br />
      <label for="lname">Last Name</label>
      <br />
      <input
        type="text"
        name="lname"
        value={text.lname}
        onChange={(e) => {
          setText({ ...text, lname: e.target.value });
        }}
      ></input>
      <br />
      <br />
      <label for="email">Email:</label>
      <br />
      <input
        type="email"
        name="email"
        value={text.email}
        onChange={(e) => setText({ ...text, email: e.target.value })}
      ></input>
      <p>First Name: {text.name} </p>
      <p>Last Name: {text.lname} </p>
      <p>Email: {text.email} </p>
    </div>
  );
}
