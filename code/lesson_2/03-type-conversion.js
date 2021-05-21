readlineSync = require('readline-sync')

userName = readlineSync.question("What is your name?\n");
console.log(typeof userName);

age = readlineSync.question("What is your age?\n");
console.log("The type of age\n");
console.log(typeof age);

age1 = age + 1;
// WTF
// age = age + "1";
console.log(typeof age1);
console.log(age1)

// I convert from string to number
age2 = Number(age);
console.log("The type of age2\n");
console.log(typeof age2)

age2 = age2 + 1;
console.log(age2);

// This will work
test1 = Number("234");

// This will be a NaN
test2 = Number("not a number hahaha");

// This will be a NaN
test3 = Number(null);

// This maybe is 1
test4 = Number(true);

// This maybe is 0
test5 = Number(false);