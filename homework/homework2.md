readlineSync = require('readline-sync')
console.log("\nHello there! My name is GabiBot and I was programmed in May 2021\n"); 
currantYear = 2021
yourName = readlineSync.question("Please, can you tell me your name? I don't like talking with strangers.\n");
console.log("Hello " + yourName + ". Nice to meet you.");
yourAge = readlineSync.question("Can you tell me your Age?\n");
birthYear = 2021 - yourAge;
console.log("So, you were born " + birthYear + ". Or was it " + (birthYear-1) + "?\nIt doesn't really matter. \nHey " + yourName + " Would you like to play a guessig game?\nPress enter if you would like to");
readlineSync.question("");
console.log("And, here we go! \nThink about a number between 0 and 104. \nDon't tell me the number. \nJust keep it in mind or write it down on a piece of paper. \nIt is a secret number!!!\n\nPress enter when you are ready.");
readlineSync.question("");
remainder3 = readlineSync.question("If you devide you number by 3, what is the remainder? ")
remainder5 = readlineSync.question("If you devide you number by 5, what is the remainder? ")
remainder7 = readlineSync.question("And finally, if you devide you number by 7, what is the remaninder? ")
secretNumber = (((remainder3 * 70) + (remainder5 * 21) + (remainder7 * 15))%105)
console.log("\nThe number you have in your mind is " + secretNumber + ".")

// number2= Number(number); 
// console.log(typeof number2); 
// console.log(number2); 
// if (!isNaN(number2)) 
//     { if (number2 % 2 === 0) 
//         { console.log("Congrats, you chose an even number"); } 
//         else { console.log("The number you chose is odd, try again"); } } 
//         else { console.log("Sorry, you need to input a number"); }

