// There are 3 ways to declare variables;

// const
// is a variable that does not change in your code
// naming constants is usually done with CAPITAL LETTERS
const PI = 3.14;
const LANGUAGE = "EN";

console.log(LANGUAGE);
// this below will throw an error; we cannot reassign it;
// LANGUAGE="FR";
console.log(LANGUAGE);

// let - has block {} (or function) scope
if (true){
    let color = "red";
    console.log(color);
}
// This will throw an error
console.log(color);

// var - has global scope
if (true){
    var color = "red";
    console.log(color);
}
// This will work
console.log(color);

// use let instead of var :)






// We can now do this:
// Declare
let myName;
console.log(myName);

// Do some logic
if (myName){
}

// Assign at a later point
myName = "Paul";

