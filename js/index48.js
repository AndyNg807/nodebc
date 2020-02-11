let message = "3.14 it's a great number but 42 it's the answer to life.";
let pi = parseFloat(message.slice(0,4));
let answerToLife = parseInt(message.slice(29,31));
let result = pi + answerToLife;
console.log("result:", result, typeof result);
let text = result.toString();
console.log("text:", text, typeof text);
 
