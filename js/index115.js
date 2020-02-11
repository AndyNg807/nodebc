function getLongerText (str1, str2){
    if(str1.length >str2.length){
        return str1;
    }else if(str2.length > str1.length){
        return str2;
    }else{
        return `${str1} is same length with ${str2}`;
    }
}

console.log(getLongerText("apple", "orange"));
console.log(getLongerText("defense", "attack"));
console.log(getLongerText("monday", "firday"));
