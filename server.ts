import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 4000;

app.get("/todos", (req, res) => {
  res.json([{ Text: "Hello World!" }]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
