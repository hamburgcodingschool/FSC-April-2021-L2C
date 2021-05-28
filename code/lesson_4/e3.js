
ages = [12, 16, 24, 28, 69, 14, 13, 80] 
// I can copy values from one array into another
// Copy all ages which are greater than 18 to a second array

largerThan18 = []
for (i=0; i < ages.length; i++){
    if (ages[i] > 18){
        largerThan18.push(ages[i]);
    }
}

console.log("Input: " + ages);
console.log("Result: " + largerThan18);



// Start with 2 hardcoded arrays. 
// Calculate a third array that contains the sum of the 
// elements in the first two arrays.

prices1 = [12, 16, 24, 28] 
prices2 = [1, 1, 1, 1]

// expected result: [13, 17, 25, 29] 
