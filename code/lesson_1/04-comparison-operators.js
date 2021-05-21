// Comparison Operators

// == != < <= > >=

a = 5;
b = 6;

aEqualsB = a == b;

console.log("a equals b: " + aEqualsB);

if (a==b){
    console.log("YES they are equal");
    console.log("This gets printed");
} 
else {
    console.log("NO they are NOT equal");
}

if (a!=b){
    console.log("YES they are different")
    console.log("This gets printed");
} else {
    console.log("NO they are NOT different")
}


// input from the user
birthYear = 1981;
// minimum age of 40 is required;
limitAge = 40;

currentYear = 2021;
age = currentYear - birthYear;

if (age > limitAge){
    console.log("You are allowed");
} else if (age == limitAge){
    console.log("You need to wait another year");
} else{
    console.log("You are NOT allowed");
}
