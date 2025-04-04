import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="flex-col justify-center items-center">
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
