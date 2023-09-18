const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.send("hello world! wellcome to fullstack. commit from dev")
);

const PORT = 5000;

app.listen(PORT, () => {
  ` Server stared on port : ${PORT}`;
});
