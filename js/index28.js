const number = 9;

console.log(number + " times 1 equals " + number * 1);
console.log(number + " times 2 equals " + number * 2);
console.log(number + " times 3 equals " + number * 3);
console.log(number + " times 4 equals " + number * 4);
console.log(number + " times 5 equals " + number * 5);
console.log(number + " times 6 equals " + number * 6);
console.log(number + " times 7 equals " + number * 7);
console.log(number + " times 8 equals " + number * 8);
console.log(number + " times 9 equals " + number * 9);
console.log(number + " times 10 equals " + number * 10);
console.log();
for (let i = 1; i < 11; i++){
    let temp = number + " times " + i + " equals " + number * i;
    let temp1 = `${number} times ${i} equals ${number * i}`
    console.log(temp);
    console.log(temp1);
}