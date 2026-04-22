const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const books = {
  "1": { title: "Book1", author: "Author1", reviews: {} },
  "2": { title: "Book2", author: "Author2", reviews: {} },
  "3": { title: "Book3", author: "Author3", reviews: {} },
  "4": { title: "Book4", author: "Author4", reviews: {} },
  "5": { title: "Book5", author: "Author5", reviews: {} },
  "6": { title: "Book6", author: "Author6", reviews: {} },
  "7": { title: "Book7", author: "Author7", reviews: {} },
  "8": { title: "Book8", author: "Author8", reviews: {} },
  "9": { title: "Book9", author: "Author9", reviews: {} },
  "10": { title: "Book10", author: "Author10", reviews: {} }
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
  res.json({ message: "Login successful" });
});

// Add review
app.put("/review/:isbn", (req, res) => {
  books[req.params.isbn].reviews["user"] = req.body.review;
  res.json({ message: "Review added successfully" });
});

// Delete review
aapp.delete("/review/:isbn", (req, res) => {
  delete books[req.params.isbn].reviews["user"];
  res.json({ message: `Review for ISBN ${req.params.isbn} deleted` });
});

app.listen(3000, () => console.log("Server running"));