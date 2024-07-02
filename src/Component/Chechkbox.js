import React, { useState } from "react";

export default function Chechkbox() {
  const [liked, setLiked] = useState(true);
  function onChangehandler(e) {
    setLiked(e.target.checked);
  }
  return (
    <div>
      <input type="checkbox" checked={liked} onChange={onChangehandler}></input>
      <p>You {liked ? "liked " : "did not liked "}this</p>
    </div>
  );
}
