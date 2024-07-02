import { useState } from "react";

export default function TodoList(todolist) {
  const [isLoading, setLoading] = useState(false);
  return (
    !isLoading && (
      <div>
        <p>
          Name: {todolist.id} {todolist.name}
        </p>
      </div>
    )
  );
}
