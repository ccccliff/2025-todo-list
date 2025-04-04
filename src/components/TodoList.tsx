import React from "react";
import TodoCard from "./TodoCard";
import { getTodos } from "../api/todos";
import { useQuery } from "@tanstack/react-query";
import { todoData } from "../types/todosType";

const TodoList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생: {String(error)}</div>;

  return (
    <div className="flex-col">
      <div className=" bg-amber-500 flex ">
        {data
          .filter((e: todoData) => e.isCompleted !== true)
          .sort(
            (a: todoData, b: todoData) =>
              Number(b.dueDate.replace(/\-/g, "")) -
              Number(a.dueDate.replace(/\-/g, ""))
          )
          ?.map((todo: todoData) => {
            return (
              <TodoCard
                key={todo?.id}
                id={todo?.id}
                title={todo?.title}
                isCompleted={todo?.isCompleted}
                dueDate={todo?.dueDate}
              />
            );
          })}
      </div>
      <div className=" bg-purple-400 flex ">
        {data
          .filter((e: todoData) => e.isCompleted == true)
          .sort(
            (a: todoData, b: todoData) =>
              Number(b.dueDate.replace(/\-/g, "")) -
              Number(a.dueDate.replace(/\-/g, ""))
          )
          ?.map((todo: todoData) => {
            return (
              <TodoCard
                key={todo?.id}
                id={todo?.id}
                title={todo?.title}
                isCompleted={todo?.isCompleted}
                dueDate={todo?.dueDate}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
