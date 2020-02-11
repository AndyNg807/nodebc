let superhero = {};
superhero.name = "Batman";
superhero.secretName = "Bruce";
superhero.sidekick = ['Robin', 'Alfred', 'Gordon'];
superhero.strength = 70;


for (let x in superhero){
    console.log(`${x} : ${superhero[x]}`);
}

console.log(superhero.speed);

superhero.speed = 80;

console.log(superhero.speed);

