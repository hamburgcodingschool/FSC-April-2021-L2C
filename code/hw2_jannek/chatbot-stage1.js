//import required modules
readlineSync = require('readline-sync')

//initial variables
botName = "Boty";
botBirthYear = 2021;

currentYear = 2021;

initialMessage = "\nHi! My Name is " + botName 
    + ".\nI was born in " + botBirthYear + ".\nBut I'm already grown up and I learn quite fast.";

askName = "\nBut Enough about me. What is your name?\n";

greetUser = "\nIt's a pleasure to meet you, ";

askAge = "I'm quite a curious bot, so I was wondering, how old you are. "
    + "Can you tell me your age in years? I won't tell anyone, promise.\n";

funnyReactionAge = "\nOh, wow! In bot years that would be... ah... never mind ;-)"

//Start of interaction
console.log(initialMessage);

userName = readlineSync.question (askName);

console.log(greetUser + userName + ".\n");

//function to control if input is a number
function controlNumberInput(question) {
    input = Number(readlineSync.question(question));
    if (isNaN(input)) {
        askAgain = '\nSorry, I didn\'t understand that. Please tell me a number. Like "20".\n'
        while(isNaN(input)) {
            input = Number(readlineSync.question(askAgain));
        }
    }
    return input;
}


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

//Start of guessing game
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

console.log(tellSecrectNumber);

//Saying goodbye
goodByeMessage = "I'm sorry but that was a bit exhausting for me. I will have to rest for a while. But I hope to see you again soon.\n\n"
console.log(goodByeMessage);