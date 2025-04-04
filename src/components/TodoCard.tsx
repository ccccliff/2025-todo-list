import React, { PropsWithChildren } from "react";
import { todoData } from "../types/todosType";
import { deleteTodos, patchTodos } from "../api/todos";

const TodoCard = ({ id, title, isCompleted, dueDate }: todoData) => {
  const handleDelete = () => {
    deleteTodos(id);
  };

  const handleIsPatch = () => {
    patchTodos(id, !isCompleted);
    console.log(id, "222222", isCompleted);
  };

  return (
    <div className="bg-white m-4 border-2">
      <div>{title}</div>
      <div>{isCompleted ? `완료` : `진행`}</div>
      <div>{dueDate}</div>
      <div className="flex p-2">
        <button className="border-2" onClick={handleDelete}>
          삭제
        </button>
        <button className="border-2" onClick={handleIsPatch}>
          {isCompleted ? "진행으로" : "완료로"}
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
