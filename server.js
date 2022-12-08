const express = require("express");
const { getAllBooks, addToBooks } = require("./handler");
const fs = require("fs");
const { PORT } = require("./utils");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/books", getAllBooks);

app.post("/books", addToBooks);

app.listen(PORT, () => console.log("server running on PORT: " + PORT));
