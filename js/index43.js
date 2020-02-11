let text = "game of thrones";
let firstChar, secondChar, thirdChar;
firstChar = text.charAt(0);
secondChar = text.charAt(5);
thirdChar = text.charAt(8);
let invalidIndex = text.charAt(1000);
let result = firstChar + secondChar + thirdChar;
let transform = result.toUpperCase();
console.log("the final result is:", transform );

console.log(invalidIndex);
