let message = "abc xyz";
message = message.toLowerCase();
let alphabet = "abcdefghijklmnopqrstuvwxyz";

let shiftCount = 3;

let output = "";

for (i = 0; i < message.length; i++) {
    let character = message[i]
    if (!alphabet.includes(character)) {
        output += character;
    }
    else {
        let alphabetIndex = alphabet.indexOf(character);
        newCharacterIndex = alphabetIndex + shiftCount;
        if (newCharacterIndex >= alphabet.length) {
            newCharacterIndex = newCharacterIndex - alphabet.length;
        }
        output += alphabet[newCharacterIndex]
    }
}

console.log(output);