const femaleStudents = ["Ada", "Betty", "Chloe", "Dora", "Emily"];
const maleStudents = ["Andy", "Benny", "Elijah", "Lucas", "James"];

const students = femaleStudents.concat(maleStudents);

console.log(femaleStudents[0]);
console.log(femaleStudents[1]);
console.log(femaleStudents[2]);
console.log(femaleStudents[3]);
console.log(femaleStudents[4]);

let count=0;
while (count<maleStudents.length){
    console.log(maleStudents[count]);
    count++
}


for (let i=0; i<students.length; i++){
    console.log(students[i]);
}


