let text = "HELLO";
let result = "";
//result = text.charAt(text.length - 1) + text.charAt(3) + text.charAt(2) + text.charAt(1) + text.charAt(0);

for (let i = text.length - 1; i >= 0; i--){
    result += text.charAt(i);
}

transform = result.toLowerCase();

console.log("the final result is: " + transform);
