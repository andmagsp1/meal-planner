import { useTodos } from "./hooks/useTodos.ts";

export function Todos() {
  const { data, isError, isLoading } = useTodos();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading todos.</div>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {data?.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
