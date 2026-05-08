const axios = require('axios');

// Get all books
axios.get('http://localhost:3000/')
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log(error);
});

// Get book by ISBN
axios.get('http://localhost:3000/isbn/1')
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log(error);
});

// Get books by Author
async function getByAuthor() {
    try {
        const response = await axios.get('http://localhost:3000/author/Author1');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

getByAuthor();

// Get books by Title
async function getByTitle() {
    try {
        const response = await axios.get('http://localhost:3000/title/Book1');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

getByTitle();