const axios = require('axios');

// Get all books
axios.get('http://localhost:3000/')
.then(response => {
    console.log("All Books:");
    console.log(response.data);
})
.catch(error => {
    console.log(error);
});

// Get book by ISBN
axios.get('http://localhost:3000/isbn/1')
.then(response => {
    console.log("Book by ISBN:");
    console.log(response.data);
})
.catch(error => {
    console.log(error);
});

// Get books by Author
axios.get('http://localhost:3000/author/Author1')
.then(response => {
    console.log("Books by Author:");
    console.log(response.data);
})
.catch(error => {
    console.log(error);
});

// Get books by Title
axios.get('http://localhost:3000/title/Book1')
.then(response => {
    console.log("Books by Title:");
    console.log(response.data);
})
.catch(error => {
    console.log(error);
});