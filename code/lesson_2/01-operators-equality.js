// Equality Operators

// == 
if (2 == 2){
    console.log("Equal!")
}
a = 3;      // assignment
if (a == 3){    // comparison
    console.log("Equal!")
}
if (b = 5) {    // assignment
    console.log("Equal!")
}

noneObject = null
d = 5

if (d){         // if(true)
    console.log("Not none");
}

if(noneObject){     // if(false)
    console.log("None Object");
}

if(true){
    console.log("true");
}

if(false){
    console.log("false");
}

// Takeaway: use one '=' only to assign! Never to compare!

a = 2;
if(a == 2){
    console.log("True!");
}
// automagically converts the "2" text to a number
// do NOT use this one!
if(a == '2'){
    console.log("Also True!");
}

// Use this one!
if(a === '2'){
    console.log("Also True!");
} else {
    console.log("NOT CONVERTING. NOT EQUAL")
}