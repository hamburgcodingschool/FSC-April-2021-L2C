let curseWords = ["hate", "dogs"]
let sentence = "I hate you and I hate dogshatehatehate"

for (i=0; i< curseWords.length; i++){
    curseWord = curseWords[i];
    while (sentence.includes(curseWord)){
        sentence = sentence.replace(curseWord, "****");
    }
}

console.log(sentence);