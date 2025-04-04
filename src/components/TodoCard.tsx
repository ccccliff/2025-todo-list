import React, { PropsWithChildren } from "react";
import { todoData } from "../types/todosType";

const TodoCard = ({ id, title, isCompleted, dueDate }: todoData) => {
  return (
    <div className="bg-white m-4 border-2">
      <div>{id}</div>
      <div>{title}</div>
      <div>{isCompleted ? `완료` : `진행`}</div>
      <div>{dueDate}</div>
    </div>
  );
};

export default TodoCard;
