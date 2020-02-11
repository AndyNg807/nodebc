const numbers = [];
for (let i = 0; i<1000; i++){
    numbers[i] = i+1;
}
/*const evenNumbers = numbers.filter(function(value){
    return value%2 == 0;
})*/

const evenNumbers = numbers.filter(value => value%2 == 0);

const oddNumbers = numbers.filter(function(value){
    return value%2 != 0;
})

for (let i = oddNumbers.length-1; i>=oddNumbers.length-10; i--){
    console.log(oddNumbers[i]);
    
}

for (let i = 0; i<20; i++) {
    console.log(evenNumbers[i]);
}