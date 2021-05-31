// They allow us to interrupt the normal cycle of a loop

// break statement
// we stop the loop
let ages = [16, 17, 14, 15, 28, 34, 45, 19]

// Write a for loop to answer this question: 
// Is there at least a person over 18 in this group?
for (let i=0; i<ages.length; i++){
    console.log("Checking " + ages[i]);
    if (ages[i] > 18){
        console.log("We found a person over 18!!");
        break;
    }
    console.log("After the if");
}


// continue statement
// we skip one step in the loop

ages = [18, 19, 20, 21, 22, 23];
let sum = 0;
// We want to do the sum for the even ages;
for(let j=0; j<10; j++){
    for (let i=0; i<ages.length; i++){
        console.log("Age: " + ages[i]);
        if (ages[i]%2!==0){
            console.log("Not even! Skipping!");
            continue;
        }
        console.log("Doing math...");
        // here I do all my complicated math; 
        // here I do all my complicated math; 
        // here I do all my complicated math; 
        // here I do all my complicated math; 
        // here I do all my complicated math; 
    }
}





    // if (ages[i]%2===0){
    //     // do my math formula 1
    //     sum = sum+ages[i];
    // }
    // // more math in between;
    // if (ages[i]%2===0){
    //     // do my math formula 2
    // }
