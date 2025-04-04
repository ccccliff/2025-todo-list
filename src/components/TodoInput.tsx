import React, { useState } from "react";
import { createTodo } from "../api/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoData } from "../types/todosType";

const TodoInput = () => {
  const [todoState, setTodoState] = useState("");
  const queryClient = useQueryClient();
  const todoMutation = useMutation({
    mutationFn: createTodo,
    //디버깅용..? 더 공부 필요
    mutationKey: ["create", "todo"],
    //옵티미스틱 업데이트
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const previousTodos = queryClient.getQueryData(["todos"]);

      queryClient.setQueryData(["todos"], (old) => [...old, newTodo]);

      return { previousTodos };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (err) => {
      alert("등록에 실패했습니다.");
      console.log("등록실패", err);
    },
  });
  const handleInput = () => {
    if (todoState.trim() !== "") {
      todoMutation.mutate(todoState);
      setTodoState("");
    } else {
      alert("글자를 입력하세요");
      setTodoState("");
    }
  };

  return (
    <div>
      <input
        value={todoState}
        onChange={(e) => setTodoState(e.target.value)}
        className="border-1"
        placeholder="할 일을 입력하세요.(100자 이하)"
        maxLength={100}
      ></input>
      <button className="" onClick={handleInput}>
        입력
      </button>
    </div>
  );
};

export default TodoInput;
