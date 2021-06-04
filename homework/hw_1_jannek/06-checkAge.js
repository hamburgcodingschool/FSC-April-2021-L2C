limit = 1970;
age = 50;
currentYear = 2021;
birthYear = currentYear - age;

if (birthYear > limit) {
    console.log("Younger");
} else if (birthYear < limit) {
    console.log("Older");
} else {
    console.log("BINGO");
}