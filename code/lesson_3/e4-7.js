// E4. Calculate and print the sum of all even numbers in the interval 0, 100.


sum= 0;
for (i=0; i<101; i++) {
    if (i % 2 === 0) {
        sum = sum + i; // short term: sum += i
    }
}

console.log(sum); 

// E5

readlineSync = require('readline-sync');

inputFromUser = readlineSync.question("Please enter a number \n");
inputFromUser = Number(inputFromUser);

while(isNaN(inputFromUser)){
    console.log("This is not a number. Try again");
    inputFromUser = readlineSync.question("Please enter a number \n");
}

console.log("Thanks! You gave me a number!");
console.log(inputFromUser);

// E6. Print only the first 3 even numbers in the interval [10, 100]; 

 for (i=10; i <101; i++) {
    if ((i % 2 === 0) && (i < 15)) {
        console.log(i);
    }
} 

loopsDone = 0;
for (i=10; i <101; i=i+2) {
    loopsDone = loopsDone +1; 
    if (loopsDone < 4 ) {
        console.log(i);
    }
    }


// E7. Find the max number in the interval [10,100] which is divisible with 3, 4 and 5;


for (i=120; i > 9 ; i--) {
    if (i % 3 === 0 && i % 4 === 0 && i % 5 === 0) {
        console.log(i);
        break;
    }
}