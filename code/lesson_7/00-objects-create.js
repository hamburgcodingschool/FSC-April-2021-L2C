// Properties of a "human" object:

// Height

// Age

// Name

// Weight

// Birthday

// Arm Length

// Has Drivers License

// Gender


// Objects = collections of properties

let user = {};
console.log(typeof user);

let userPaul = {
    firstName: "Paul",
    lastName: "Anton",
    birthday: "1992.07.02",
    armLength: 150,
    hasDriversLicense: true,
    gender: "M"
};
console.log(typeof userPaul);
console.log(userPaul.birthday);

if (userPaul.hasDriversLicense){
    console.log("He has a drivers license!")
} else {
    console.log("He does NOT have a drivers license!")
}


// let's try to access a property that does not exist

console.log(userPaul.address);

userPaul.address = "Hamburg";

console.log(userPaul.address);
console.log(userPaul)
