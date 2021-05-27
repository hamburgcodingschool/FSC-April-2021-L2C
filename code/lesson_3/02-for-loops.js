// For loops;

console.log("before the loop");
// I want to print all integer numbers from 0 to 50;
// Print them in steps of 5; e.g. 0, 5, 10, 15;

// for (i = 0; i <= 50; i++){
for (i = 0; i <= 50; i = i+1){
    console.log(i);    
    if (i===10){
        console.log("bingo!");
    }
}
console.log("after the loop");


// While loops;

// readline-sync
inputFromUser = console.readInputFromUser();

while(isNaN(inputFromUser)){
    console.log("This is not a number. Try again");
    inputFromUser = console.readInputFromUser();
}

console.log("Thanks! You gave me a number!");
console.log(inputFromUser);
