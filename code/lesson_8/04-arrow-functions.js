// Arrow Functions - Not enough practice

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

let books = [b1, b2];

function increaseBookPriceBy10(book){
    book.price += 10/100 * book.price;
}

books.forEach(increaseBookPriceBy10);





books.forEach((book)=>{
    book.price += 100 * book.price;
})
