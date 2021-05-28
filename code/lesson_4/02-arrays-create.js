let prices = [];

console.log("The length is " + prices.length);
prices.push(5);

console.log("The length is " + prices.length);
console.log(prices);

prices.push(16);
console.log("The length is " + prices.length);
console.log(prices);

prices.push(18, 20, 22);
console.log("The length is " + prices.length);
console.log(prices);


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