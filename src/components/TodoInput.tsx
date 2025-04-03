import React, { useState } from "react";
import createTodo from "../api/todos";
const TodoInput = () => {
  const [todoState, setTodoState] = useState("");

  const handleInput = () => {
    createTodo(todoState);
    setTodoState("");
  };
  return (
    <div>
      <input
        value={todoState}
        onChange={(e) => setTodoState(e.target.value)}
        className=""
        placeholder="할 일을 입력하세요.(100자 이하)"
        maxLength={100}
      ></input>
      <button onClick={handleInput}>입력</button>
    </div>
  );
};

export default TodoInput;
