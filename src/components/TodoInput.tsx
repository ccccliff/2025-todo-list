import React, { useState } from "react";
import createTodo from "../api/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TodoInput = () => {
  const [todoState, setTodoState] = useState("");
  const queryClient = useQueryClient();
  const todoMutation = useMutation({
    mutationFn: createTodo,
    //디버깅용..? 더 공부 필요
    mutationKey: ["create", "todo"],
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => {
      alert("등록에 실패했습니다.");
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
        className=""
        placeholder="할 일을 입력하세요.(100자 이하)"
        maxLength={100}
      ></input>
      <button onClick={handleInput}>입력</button>
    </div>
  );
};

export default TodoInput;
