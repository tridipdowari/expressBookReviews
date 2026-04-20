const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let books = {
  "1": { title: "Book1", author: "Author1", reviews: {} },
  "2": { title: "Book2", author: "Author2", reviews: {} }
};

let users = [];

// Get all books
app.get("/", (req, res) => {
  res.json({ books });
});

// Get by ISBN
app.get("/isbn/:isbn", (req, res) => {
  res.json(books[req.params.isbn]);
});

// Get by Author
app.get("/author/:author", (req, res) => {
  const result = Object.values(books).filter(
    b => b.author === req.params.author
  );
  res.json(result);
});

// Get by Title
app.get("/title/:title", (req, res) => {
  const result = Object.values(books).filter(
    b => b.title === req.params.title
  );
  res.json(result);
});

// Get reviews
app.get("/review/:isbn", (req, res) => {
  res.json(books[req.params.isbn].reviews);
});

// Register
app.post("/register", (req, res) => {
  users.push(req.body);
  res.json({ message: "User successfully registered" });
});

// Login
app.post("/login", (req, res) => {
  res.json({ message: "User successfully logged in" });
});

// Add review
app.put("/customer/review/:isbn", (req, res) => {
  books[req.params.isbn].reviews["user"] = req.body.review;
  res.json({ message: "Review added" });
});

// Delete review
app.delete("/customer/review/:isbn", (req, res) => {
  delete books[req.params.isbn].reviews["user"];
  res.json({ message: "Review deleted" });
});

app.listen(3000, () => console.log("Server running"));