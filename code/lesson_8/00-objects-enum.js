// enum - is a type of variable which can only take predefined values

const LANGUAGE = "en";

const currencies = {
    EUR: "€",
    USD: "$",
    RON: "RON"     
}

// console.log(currencies.USD);


let b1 = {
    title: "Gone with the wind",
    price: 30,
    currency: currencies.EUR
}

let b2 = {
    title: "The godfather",
    price: 40,
    currency: currencies.USD
}

console.log(b1.title);
console.log(b1.currency);