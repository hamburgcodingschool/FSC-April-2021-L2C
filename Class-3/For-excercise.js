// E1. Print all even numbers between 10 and 20 (including 10 and 20). An even number is a number
// x for which the following is true: x % 2 === 0

for (i = 10; i < 21; i++ ) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/* for (i =10; i<21; i= i+2)  */


// E2. Iterate from 0 to 50; Print "##" for even numbers and "!!" for odd numbers;

for (i = 0; i < 51; i++ ) {
    if (i % 2 === 0) {
        console.log("##");
    }  else {   
        console.log("!!");
    }
} 
 
// E3. Print all numbers from 10 to 0 in descending order;

for (i=10; i >= 0; i--) {
    console.log(i);
}

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


