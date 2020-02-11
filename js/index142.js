let firstPerson, secondPerson;
firstPerson = ["Andy", "Ng", "Vancouver", 45];
secondPerson = ["Andy", "Ng", "Vancouver", 45];

let str = firstPerson.reduce((acc, val) => acc + val) === secondPerson.reduce((acc, val) => acc + val)? "they are the same person" : "they are not the same person";

console.log(str);