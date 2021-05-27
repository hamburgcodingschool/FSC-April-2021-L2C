x = 5;
console.log("x here: " + x);
x = x * 173;    // 865
console.log("x value here: " + x);
y = x / 4;      // result is floating number 216.25
console.log("y value: " + y);
x = x % 4;      // result is 216
console.log("Remainder : " + x);

// y = 216.25
// y = 216
y = Math.round(y);

z = y * 4 + x;
console.log(z);   // 865



rest1 = 1.8
rest2 = 1.4

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
console.log(Math.round(rest1))
console.log(Math.round(rest2))

console.log(Math.floor(rest1))
console.log(Math.floor(rest2))

console.log(Math.ceil(rest1))
console.log(Math.ceil(rest2))



a = "abcdf"
if (a === "somethingelse"){
  console.log(a);
  console.log("True");
} else{
  console.log(a);
  console.log("False");
}


console.log("#####\n\n\n")




