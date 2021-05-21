readlineSync = require('readline-sync')

userName = readlineSync.question("What is your name?\n");
console.log(typeof userName);

age = readlineSync.question("What is your age?\n");
console.log("The type of age\n");
console.log(typeof age);

// E2.1:
// Add console statements below and check what values the test variables have.
// What about the types of these variables?
// anything funny?

// This will work
test1 = Number("234");

// This will be a NaN
test2 = Number("not a number hahaha");

// This will be 0
test3 = Number(null);
console.log(test3);
// This maybe is 1
test4 = Number(true);

// This maybe is 0
test5 = Number(false);

//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number


// Task 2  + - * /



// E2.2:
// Write a program that gets as input a number from the User;
// Print "Odd" if the number is odd
// Print "Even" if the number is even
// Mathematical formula: 
// a number is odd if the rest when dividing with 2 is 1
// Bonus: check if the user really inputs a number; if not, do nothing.

number = readlineSync.question("Tell me a number\n");
number2 = Number(number);
console.log(typeof number2);
console.log(number2);

if (!isNaN(number2)) {
    if (number2 % 2 === 0) {
        console.log("Congrats, you chose an even number");
    }
    else {
        console.log("The number you chose is odd, try again");
    }
} else {
    console.log("Sorry, you need to input a number");
}