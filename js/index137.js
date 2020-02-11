const numbers = [];
let sum = 0;

for (let i = 0; i<1000; i++){
    numbers[i] = i+1;
}

const incremented = numbers.map(function(value){
       return value +=10;
})
    


for (let i = 0; i<1000; i++){
    console.log(`index: ${i}, original number: ${numbers[i]}, incremented value: ${incremented[i]}`);
    
}

