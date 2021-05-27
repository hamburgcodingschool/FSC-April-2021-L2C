
a = 6;
b = 10;
console.log(a !== 6);           // strict! they are NOT equal -> false!
console.log(a === 6);

console.log(a !== "6");         // strict! so they are NOT equal -> true!
console.log(a === "6");

console.log(a != "6");          // not strict! so they are NOT equal -> false!
console.log(a == "6");


newsletterCheckbox = true;

// if (newsletterCheckbox === true){
if (newsletterCheckbox){
    console.log("Yes! Selected!");
} else {
    console.log("No! Not selected!");
}

// if (newsletterCheckbox !== true){
if (!newsletterCheckbox){
    console.log("No! Not selected!");
} else {
    console.log("Yes! Selected!");
}
