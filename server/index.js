const express = require("express");
const db = require("../db/index.js").connection;

const app = express();
const port = 4000;

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`dockside at port ${port}`);
});

app.get("/list", (req, res) => {
  db.query("SELECT * FROM list", function (error, results) {
    if (error) {
      console.log(error);
      res.status(400).send();
      return;
    } else {
      res.send(results);
    }
  });
});

app.post("/list", (req, res) => {
  db.query(`INSERT INTO list (item) values ('${req.body.data}')`, function (
    error,
    results
  ) {
    if (error) {
      console.log(error);
      res.status(400).send();
    } else {
      res.status(201).send();
    }
  });
});
