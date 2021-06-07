let b1 = {
    title: "Gone with the wind",
    price: 30,
    currency: "EUR",
    author: {
        firstName: "Paul"
    }
}

let b2 = {
    title: "The godfather",
    price: 40,
    currency: "USD",
    author: {
        firstName: "Jannek"
    }
}

let books = [b1, b2];

console.log(books[0].title)


// E0. You are given an array with 2 book objects:  
// 0.0 Add another property to each book, which is an object: 
// author {firstName: "..."}
// 0.1 Add another book to the array of objects
// 0.2 Print the name of the author of the first book in the array
// 0.3 Print the name of the author of the last book in the array