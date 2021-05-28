readlineSync = require('readline-sync')
console.log("\nHello there! My name is GabiBot and I was programmed in May 2021.\n"); 
currantYear = 2021
currantMonth = 05
currantDay = 26

yourName = readlineSync.question("Please, can you tell me your name? I don't like talking with strangers.\n");
console.log("Hello " + yourName + ". Nice to meet you.");
birthYear = readlineSync.question("What year were you born in?\n");
birthMonth = readlineSync.question("In which month were you born?\n");
birthDay = readlineSync.question("And what day?\n")
age1 = currantYear - birthYear
if ((currantMonth > birthMonth)&&(currantDay-birthDay>=0)){
    console.log("You are " + age1 + " years old.")
}
else if ((currantMonth == birthMonth) && (currantDay == birthDay)){
    console.log("Happy Birthday!!! You became " + age1 + " today.")
}
else {
    console.log("You are " + (age1 - 1) + " years old.\n")
}
console.log("Can we play a game? Please press 'Enter'.")
readlineSync.question("");
console.log("And, here we go! \nThink about a number between 0 and 104. \nDon't tell me the number. \nJust keep it in mind or write it down on a piece of paper. \nIt is a secret number!!!\n\nPress enter when you are ready.");
readlineSync.question("");
remainder3 = readlineSync.question("If you devide you number by 3, what is the remainder? ")
remainder5 = readlineSync.question("If you devide you number by 5, what is the remainder? ")
remainder7 = readlineSync.question("And finally, if you devide you number by 7, what is the remainder? ")
secretNumber = (((remainder3 * 70) + (remainder5 * 21) + (remainder7 * 15)) %105)
console.log("\nThe number you have in your mind is " + secretNumber + ".")

