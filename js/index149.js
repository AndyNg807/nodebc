const user = {
    name : "Ng",
    secretName : "cybaster",
}

user.sidekick = ["joanna", "katherine", "chloe"];
user.strength = 70;
user.speed = 80;
user.favourColour = "blue";
user.age = 40;
user.childern = 2;
user.hobby = "modelKit";
user.pet = "bird";

for (let x in user){
    console.log(`${x} : ${user[x]}`);
}