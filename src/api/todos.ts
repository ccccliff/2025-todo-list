import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { formattedDate } from "../hooks/newDate";

export const createTodo = async (newTodo: string) => {
  const res = axios.post("http://localhost:3000/todos", {
    id: `${uuidv4()}`,
    title: newTodo,
    isCompleted: false,
    dueDate: formattedDate,
  });
  return (await res).data;
};

export const getTodos = async () => {
  const res = axios.get(`http://localhost:3000/todos/`);
  return (await res).data;
};
