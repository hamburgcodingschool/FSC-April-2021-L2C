readlineSync = require('readline-sync');

userNumber = readlineSync.question("Tell me a number from 1 to 10\n");
userWord = readlineSync.question("Tell me a word you like\n"); 

userSong= "";

for (i=0; i<userNumber ; i++) {
    userSong = userSong + userWord;
}

console.log(userSong);

/* 2.2 Play a guessing game with Sally
Implement a guessing game that your bot can play with its users.

The bot should:

 hardcode a random number (e.g. randomNumber = 78) WHILE the user did not guess the number:
 ask the user to input a number
 check if the guess is correct
 tell the user: "too large" or "too small" After the user has guessed the number:
 tell the user: "good job" */

 randomNumber = 10;
 userNumber = readlineSync.question("Try to guess the number I am thinking...;) \n");
 wrongGuesses = 0;

while (userNumber != randomNumber) {
    
     wrongGuesses = wrongGuesses + 1; 

     if (userNumber > randomNumber) {
        userNumber = readlineSync.question("Try again! this time it was too big \n");
    } else if (userNumber < randomNumber) {
        userNumber = readlineSync.question("Try again! this time it was too small \n");
    } 
 }

console.log("That's right! It took you only " + wrongGuesses + " guesses to find the number!");
 
    
    
    
   



