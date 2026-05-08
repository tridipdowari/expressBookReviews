const axios = require('axios');

// Task 10: Get all books
axios.get('http://localhost:3000/')
.then(response => {
    console.log("All Books:");
    console.log(response.data);
})
.catch(error => {
    console.log(error);
});

// Task 11: Get book by ISBN using Promises
axios.get('http://localhost:3000/isbn/1')
.then(response => {
    console.log("Book by ISBN:");
    console.log(response.data);
})
.catch(error => {
    console.log(error);
});

// Task 12: Get books by Author using async/await
async function getByAuthor() {
    try {
        const response = await axios.get('http://localhost:3000/author/Author1');
        console.log("Books by Author:");
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

getByAuthor();

// Task 13: Get books by Title using async/await
async function getByTitle() {
    try {
        const response = await axios.get('http://localhost:3000/title/Book1');
        console.log("Books by Title:");
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

getByTitle();