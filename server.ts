import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;

let nextId = 1;

type Todo = {
  id: number;
  text: string;
};

const todos = [] as Todo[];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  let newTodo = {
    id: nextId++,
    text: req.body.text,
  };
  todos.push(newTodo);
  res.json(todos);
});

app.delete("/todos", (req, res) => {
  const filteredTodos = todos.filter((todo) => !req.body.includes(todo.id));
  todos.splice(0, todos.length, ...filteredTodos);
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
