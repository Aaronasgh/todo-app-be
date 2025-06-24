import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;

type Todo = {
  id: number;
  text: string;
};

const todos = [
  { id: "1", text: "Buy Milk" },
  { id: "2", text: "Do Laundry" },
  { id: "3", text: "Clean Room" },
  { id: "4", text: "Workout" },
  { id: "5", text: "Go Swimming" },
  { id: "6", text: "Do Homework" },
  { id: "7", text: "Call Nick" },
  { id: "8", text: "Water Plants" },
  { id: "9", text: "Study" },
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  let newTodo = {
    id: (todos.length + 1).toString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
