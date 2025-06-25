import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

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
    id: nextId++, //Ensures unique and continuus IDs
    text: req.body.text,
  };
  todos.push(newTodo);
  res.json(todos);
});

app.delete("/todos", (req, res) => {
  const filteredTodos = todos.filter((todo) => !req.body.includes(todo.id)); //Keep Todos whose IDs are not in the request body. Filter out Todos to be deleted.
  todos.splice(0, todos.length, ...filteredTodos); //Remove all current Todos and add the newly filtered ones
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
