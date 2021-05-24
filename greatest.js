a = 8;
b = 10;
c = 25;

if(a < b < c) {
    console.log(c);
} else if(a < c < b) { 
    console.log(b);
} else if(c < b < a) {
    console.log(a)
}