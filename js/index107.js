function biggerNumber(firstNumber, secondNumber){
   if(typeof firstNumber === "number"|| typeof secondNumber === "number"){ 
    
    if(firstNumber>secondNumber){
        return `Number ${firstNumber} is bigger than ${secondNumber}`;
    }else if(secondNumber>firstNumber) {
        return `Number ${secondNumber} is bigger than ${firstNumber}`;
    }else {
        return `Both numbers are ${firstNumber}`;
    }
    

}else {
        return "two parameters must be number!";
    }
}


console.log(biggerNumber(3,5));

console.log(biggerNumber(6,3));

console.log(biggerNumber(2,2));

console.log(biggerNumber("",""));




