// functions can return strings
function getGreeting(name){
    let response = "Hello " + name;
    // console.log(response);
    return response;
}

greetingForPaul = getGreeting("Paul");
console.log(greetingForPaul);


// functions can return booleans
function serveAlcohol(alcohol, age){
    console.log("Checking age: " + age);
    if (age >= 18){
        console.log("YES you can drink");
        return true;
        console.log("THIS WILL NEVER BE DISPLAYED");
    }
    console.log("NO you can not drink"); 
    return false;
    console.log("THIS WILL NEVER BE DISPLAYED");
}

serveAlcohol(16);
serveAlcohol(20);
serveAlcohol(24);

// functions can return numbers

function getArrayLength(array){
    return array.length;
}

length = getArrayLength([4, 5, 6, 18]);
console.log(length)

// chaining function calls is also possible
console.log(getArrayLength([23, 24, 25, 26]));





// Work with functions that take as parameters arrays (one or more)

// E3. Write a function that returns the sum of all elements in an array
function addArrayElements(array){
    
    return sum; // number
}

// E3.a Modify the function to only return the sum of all even elements;

// E4. Write a function that returns boolean true if an array contains a specific number (also given as parameter)

function containsElement(array, number){

    // returns boolean
}

