import React from "react";
import TodoCard from "./TodoCard";
import { getTodos } from "../api/todos";
import { useQuery } from "@tanstack/react-query";
import { todoData } from "../types/todosType";

const TodoList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["id"],
    queryFn: getTodos,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러 발생: {String(error)}</div>;

  return (
    <div className=" bg-amber-500 ">
      {data?.map((todo: todoData) => {
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
  );
};

export default TodoList;
