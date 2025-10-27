import type { Todo } from "../types/Todo.ts";

export const getTodos = async (): Promise<Todo[]> => {
  const url = `http://localhost:3001/api/todos`;
  const response = await fetch(url);
  return await response.json();
};
