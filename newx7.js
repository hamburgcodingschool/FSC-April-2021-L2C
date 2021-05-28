// E7. Find the max number in the interval [10,100] which is divisible with 3, 4 and 5; 

divi = 0;

for (x = 10; x <= 100; x++) {
    divi = x / 3 && x / 4 && x / 5;
}

console.log(divi);