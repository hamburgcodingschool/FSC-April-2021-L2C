// E1
// 1.1 Write a function that decreases the price of a book to half of its value
// 1.2 Write a function that converts a book's authors' last name to lowercase
// .toLower()
// 1.3 Write a function that converts a book's authors' last name to uppercase
// .toUpper()


let b1 = {
    title: "Gone with the wind",
    price: 30,
    currency: "EUR",
    author: {
        lastName: "Anton"
    }
}

let b2 = {
    title: "The godfather",
    price: 40,
    currency: "USD", 
    author: {
        lastName: "Holfeld"
    }
}

// this comes from the database
let books = [b1, b2];

function lastNameToLower(book) {

}

function lastNameToUpper(book) {
    
}

function priceInHalf(book) {

}

books.forEach(lastNameToLower);

b1.author.lastName.toLowerCase();

console.log(b1)