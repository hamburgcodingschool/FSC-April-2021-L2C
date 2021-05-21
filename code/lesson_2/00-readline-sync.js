readlineSync = require('readline-sync')

console.log("BEFORE")
userName = readlineSync.question("What is your name?\n");
console.log("Nice to meet you, " + userName);
console.log("AFTER")



limit = 1970; 
// hardcoded value;
// how to make this come from the user?
age = 50; 
currentYear = 2021; 
birthYear = currentYear - age; 

if (birthYear > limit) 
{ 
    console.log("Younger"); 
} else if (birthYear < limit) 
{ 
    console.log("Older"); 
} else { 
    console.log("BINGO"); 
}

