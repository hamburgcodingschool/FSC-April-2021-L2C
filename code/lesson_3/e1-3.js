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