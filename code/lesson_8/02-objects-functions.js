
let b1 = {
    title: "Gone with the wind",
    price: 30,
    currency: "EUR"
}

// write a function that prints the price of the book passed as a parameter

function printBookPrice(book){
    console.log(book.price);
}
// printBookPrice(b1);

// write a function that increases the price of my book with 10 percent

// Change this function to take a 2nd parameter, called percentage
// increase the book price with that percentage

function increaseBookPrice(theBookOfMyLife){
    theBookOfMyLife.price += 10/100 * theBookOfMyLife.price;
}

increaseBookPrice(b1, 1);
console.log(b1.price);

increaseBookPrice(b1, 15);
console.log(b1.price);
increaseBookPrice(b1, 15);
console.log(b1.price);