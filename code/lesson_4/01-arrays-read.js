// Arrays = Lists 

let ages = [12, 16, 24, 98, 64]

console.log("The first value in the array is: " + ages[0]);
console.log(ages[1]);
console.log(ages[2]);

lastPosition = ages.length - 1;
console.log("The last value is " + ages[lastPosition]);

console.log(typeof(ages));

console.log("The length of the array: " + ages.length);


ages = [12, 16, 24, 98, 64, 24, 98, 64, 24, 98, 64]
// Print all the ages in your array :)
// We use the for loop

for (let i = 0; i < ages.length; i = i + 1){
    let currentAge = ages[i];
    console.log("Position is: " + i);
    console.log("Value is: " + currentAge);
}

// E0. Print all the ages in the array in reverse order; 
for (let i = 0; i < ages.length; i = i + 1){

}



// E1. Print all positions of all ages greater than 18;
// E2. Iterate through the array and calculate the sum of its values;

