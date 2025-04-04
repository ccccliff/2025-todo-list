import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { formattedDate } from "../hooks/newDate";

export const createTodo = async (newTodo: string) => {
  const res = await axios.post("http://localhost:3000/todos", {
    id: `${uuidv4()}`,
    title: newTodo,
    isCompleted: false,
    dueDate: formattedDate,
  });
  return res.data;
};

export const getTodos = async () => {
  const res = await axios.get(`http://localhost:3000/todos/`);
  return res.data;
};

export const deleteTodos = async (id: string) => {
  const res = await axios.delete(`http://localhost:3000/todos/${id}`);
  return res.data;
};

export const patchTodos = async (id: string, isCompleted: boolean) => {
  const res = await axios.patch(`http://localhost:3000/todos/${id}`, {
    isCompleted,
  });
  return res.data;
};
