a = 36;
b = 12;
c = 15;

if (a > b && a > c) {
    console.log("The largest value is: " + a);
} else if (b > a && b > c) {
    console.log("The largest value is: " + b);
} else if (c > a && c > b) {
    console.log("The largest value is: " + c);
} else {
    console.log("There is no largest value. \nAt least two of the three are equal.")
}