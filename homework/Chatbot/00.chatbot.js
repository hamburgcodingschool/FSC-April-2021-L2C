readlineSync = require('readline-sync');

botName= "Mario";
botBirthYear= 1990;

//stage 1.1

console.log("Ciao! It's-a me, " + botName + "! \n" + "I was born in " + botBirthYear + ".");

// 1.2

userName = readlineSync.question("I heard you want-a to help me saving the princess." + "\n" + "What is your battle name?" + "\n")

if (typeof userName === 'string') {}
console.log("Nice to meet you, brave " + userName + "!");

//1.3

userAge = readlineSync.question("Scusa " + userName + " but I must ask, how old are you? \n");
currentYear = 2021;
userBirthYear = currentYear - userAge;

if (!isNaN(userBirthYear)) {
    
    if (userBirthYear < botBirthYear) {
        console.log("So your birth year is: " + userBirthYear + "! You are older and wiser than me!");
    } else if (userBirthYear > botBirthYear) {
        console.log("So your birth year is: " + userBirthYear + "! You are younger and stronger than me!");
    } else {
        console.log("How funny, your birth year is: " + userBirthYear + "! We are the same age!");
    } 

} else {
    console.log("Non capisco! Unfortunately I cannot read what you wrote. \nCan you please just use a number?");
    }

//1.4

invitation = readlineSync.question("Wanna play a game " + userName + "? Press enter! \n");
gameStart = readlineSync.question(userName +", think about a number between 0 and 104. When ready, press Enter!");

remainder3= readlineSync.question("Please divide the number by 3, what is the remainder? \n");
remainder5= readlineSync.question("Bene! and now divide the number by 5, what is the remainder? \n");
remainder7= readlineSync.question("Last one, if you divide the number by 7, what is the remainder? \n");

secretNumber = (remainder3 *70 + remainder5 * 21 + remainder7 * 15) % 105;

if (isNaN(secretNumber)) {
    console.log("Please use numbers for the remainders, I could not read what you wrote :( "); 
}  else {
    if (remainder3 >= 3 || remainder5 >= 5 || remainder7 >= 7) {
        console.log("I think you might have done a calculation mistake, can you please retry? \nRemainders cannot be bigger than the dividend");
    }  /* else if (!Number.isInteger(remainder3) || !Number.isInteger(remainder5) || !Number.isInteger(remainder7)) {
        console.log("I think you might have done a calculation mistake! \nRemainders need to be integers");
    } */ else {
    console.log("I think I know what your number is...\n" + secretNumber +", am I right? ;)"); 
    }
}

