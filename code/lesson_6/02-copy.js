

// https://learnersbucket.com/examples/array/how-to-copy-array-in-javascript/
// deep copy vs shallow copy
let original = [0, 10, 100]
let newArray = [original];      // shallow copy
let newArray = [...original];   // deep copy

newArray.push(1000);

console.log(original);
console.log(newArray);