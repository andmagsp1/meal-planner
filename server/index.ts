import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Sample todos data
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Learn Express", completed: false },
  { id: 3, title: "Build a Todo App", completed: false },
];

// Get all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Get a single todo
app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(todo);
});

// Create a new todo
app.post("/api/todos", (req, res) => {
  const newTodo: Todo = {
    id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
    title: req.body.title,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put("/api/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todo.title = req.body.title ?? todo.title;
  todo.completed = req.body.completed ?? todo.completed;
  res.json(todo);
});

// Delete a todo
app.delete("/api/todos/:id", (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todos.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
