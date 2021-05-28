ages = [12, 16, 24] 
// Print all the ages in your array :)
// We use the for loop

// Last element
console.log(ages[ages.length-1]);

for (let i = 0; i < ages.length; i = i + 1){
    let currentAge = ages[i];
    console.log("Position is: " + i);
    console.log("Value is: " + currentAge);
}

// E0. Print all the ages in the array in reverse order; 
for (let i = ages.length; i > 0; i = i - 1){
    console.log(ages[i]);
}


// E1. Print all positions of all ages greater than 18;

for (let i = 0; i < ages.length; i = i + 1){
    if(ages[i] > 18){
        console.log("Position is: " + i);
        }
}



// E2. Iterate through the array and calculate the sum of its values;