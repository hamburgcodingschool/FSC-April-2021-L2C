let b1 = {
    title: "Gone with the wind",
    price: 30,
    currency: "EUR"
}

let b2 = {
    title: "The godfather",
    price: 40,
    currency: "USD"
}

// this comes from the database
let books = [b1, b2];

// the task: increase all prices by 10 %
// for(let i=0; i<books.length; i++){
//     increaseBookPrice(books[i], 10);
// }

// console.log(books)

// foreach - if we want to apply the same function 
// to ALL elements in an array


function increaseBookPriceBy10(book){
    book.price += 10/100 * book.price;
}
books.forEach(increaseBookPriceBy10);
console.log(books);

// THIS DOES NOT WORK;
// WE CANNOT PASS PARAMETERS TO THE CALLBACK FUNCTION THAT WE PASS IN FOREACH()

// function increaseBookPrice(book, percentage){
//     book.price += percentage/100 * book.price;
// }

// books.forEach(increaseBookPrice(element, 30));
// console.log(books);


// books.forEach((book)=>{
//     book.price += 100 * book.price;
// })

console.log(books)