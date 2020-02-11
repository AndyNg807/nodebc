function revert(str){
    str = str.toString()
    let result = str.split("").reverse().join("");
    return result;
}

console.log(revert("abcde"));
console.log(revert(123456));
console.log(revert("apple"));
console.log(revert("orange"));
console.log(revert("happy"));