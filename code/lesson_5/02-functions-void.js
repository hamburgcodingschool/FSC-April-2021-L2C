// Void functions - they do not return any value;
// They only execute commands;

// How do I declare a function
function printCurrentYear(){
    console.log("The current year is 2021");   
}

// How do I call it
printCurrentYear();

function printMonthName(monthName){
    console.log("The current month is: " + monthName);
}

printMonthName("July");
printMonthName("January");
printMonthName("June");


// Before you write your own function, answer 2 questions:
// 1. What should the function do? (the action)
// 2. What does it need? (the parameters)

function helloUser(userName, userAge){
    console.log("Hello, " + userName);
    console.log("You are " +userAge+ " years old");
}

helloUser("Flavia", 23);
helloUser("Jannek", 24);


// E0. 
// Write a function that builds a string which contains the same word more times. 
// The word and the number of times should be passed in as parameters.
// printWordManyTimes("hello", 5);
// hellohellohellohellohello

function singSong(word, count){
    console.log(typeof word);
    console.log(typeof count);
}

singSong("word!", 5);
singSong(5, "word");

// E1. 
// Write a function that prints the sum of two numbers. 
// The 2 numbers should be passed in as parameters
// e.g. add(3,5)


// E2.
// A function that takes an array as a parameter
// The function should print every element in the array
// e.g. printArrayElements([3,5,7])

function printArrayElements(numbers){
    // console.log(numbers);
    if (typeof numbers !== "object"){
        console.log("THIS FUNCTION ONLY TAKES ARRAYS AS PARAMETERS!!!");
        return;
    }
    console.log(typeof numbers);
    for (let i=0; i<numbers.length; i++){
        console.log(numbers[i]);
    }
    
}



a1 = [15, 16, 17];
a2 = [20, 21, 34];

printArrayElements(a1);
printArrayElements(a2);
// this method is stupid, it does not work!

// printArrayElements("TextParameter");





// Bonus:

// Write a function that takes an array as a parameter and 
// prints only the unique elements of the array.