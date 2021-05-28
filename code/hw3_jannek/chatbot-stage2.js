//import required modules
readlineSync = require('readline-sync');

//initial variables
botName = "Boty";
botBirthYear = 2021;

currentYear = 2021;

//function to control if input is a number
function controlNumberInput(question) {
    input = Number(readlineSync.question(question));
    while(isNaN(input)) {
        askAgain = '\nSorry, I didn\'t understand that. Please tell me a number. Like "20".\n';
        input = Number(readlineSync.question(askAgain));
    }
    return input;
}

//Start of interaction

initialMessage = "\nHi! My Name is " + botName 
    + ".\nI was born in " + botBirthYear + ".\nBut I'm already grown up and I learn quite fast.";

askName = "\nBut Enough about me. What is your name?\n";

greetUser = "\nIt's a pleasure to meet you, ";

askAge = "I'm quite a curious bot, so I was wondering, how old you are. "
    + "Can you tell me your age in years? I won't tell anyone, promise.\n";

funnyReactionAge = "\nOh, wow! In bot years that would be... ah... never mind ;-)"

console.log(initialMessage);

/* userName = readlineSync.question (askName);

console.log(greetUser + userName + ".\n");

//Ask Age and tell birth year
userAge = controlNumberInput(askAge);

console.log(funnyReactionAge);

userBirthYear = currentYear - userAge;

respondBirthYear = "So you you were born in " + userBirthYear + ", I guess.";
console.log(respondBirthYear);

askChilhood = "What was it like, growing up in those times?\n";

childhoodMemories = readlineSync.question(askChilhood);

childhoodReaction = "\nWell, I think given my short existence on this earth I'm not the right one to reminisce about your childhood with...\n";
console.log(childhoodReaction);

//Start of guessing game --> bot guesses
askGuessingGame = "\nAnyway. Hey, " + userName + ", I've got a great idea. Let's play a guessing game! Ready? Just hit Enter.\n";

startGame = readlineSync.question(askGuessingGame);

instructionGame = "It works like this: Think of a number between 0 and 104 and write it down. But don't tell me, yet."
    + "\nYou got one? Then press Enter to proceed.\n";

gotIt = readlineSync.question(instructionGame);

//Getting the nessecary info
askDivideBy3 = "Great. \nIf you divide the number by 3, what is the remainder?\n";
askDivideBy5 = "\nNow, if you divide the number by 5, what is the remainder?\n";
askDivideBy7 = "\nOkay, and if you divide the number by 7, what is the remainder?\n";

remainder3 = controlNumberInput( askDivideBy3);
remainder5 = controlNumberInput( askDivideBy5);
remainder7 = controlNumberInput( askDivideBy7);

//calculating the result
secretNumber = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;

tellSecrectNumber = "So your secrect number is... mmhh... " + secretNumber + "! :-)" 
    + "\nThat was amazing, right?\n";

console.log(tellSecrectNumber); */


/* ---------------------------------------- */
//stage 2 (homework3)

//Bot song
promptSong1 = "Hey, I've got another idea! I can sing a song for you."
    + "\nPlease tell me a number.\n";

number = controlNumberInput(promptSong1);

promptSong2 = "\nGreat! Now give me a word.\n";

word = readlineSync.question(promptSong2);
song = word;
for (i=1; i<number; i++) {
    song += word;
}
console.log(song);
console.log("\nFunny, right?\n");

//Guessing game reverse --> user guesses

function getRandomInt(max) {
    return Math.floor(Math.random() * (max+1));
}

randomNr = getRandomInt(100);

songToGuessingGame = "\nOkay, singing is not my strong suit."
    + "\nBut guessing games are! It's your turn now.\n";
    
console.log(songToGuessingGame);

askNr = "I'm thinking about a number between 0 and 100. \nTry to guess it.\n";

guessedNr = controlNumberInput(askNr);

tries = 1;

while (guessedNr !== randomNr) {
    if (randomNr > guessedNr) {
        console.log("My number is larger than that.");
    } else {
        console.log("My number is smaller than that.");
    }
    guessedNr = controlNumberInput("Try again.\n\n");
    tries++;
}

foundNumber = "Great job! " + randomNr + " is indeed the number I was thinking of."
    + "\nAnd you needed only " + tries + " tries to guess it.\n";

console.log(foundNumber);

/* ----------------------------- */

//Saying goodbye
goodByeMessage = "\nI'm sorry but that was a bit exhausting for me. I will have to rest for a while. But I hope to see you again soon.\n\n"
console.log(goodByeMessage);



