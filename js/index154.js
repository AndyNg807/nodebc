const player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function(damage){
        this.energy - damage < 0 ? this.energy = 0 : this.energy -= damage;
    },
    recoverEnergy: function(energyUp){
        this.energy + energyUp >100? this.energy = 100 : this.energy +=energyUp;
    },
    loseLife: function(){
        this.lives-1 <= 0? console.log("your lose a life!") : this.lives--;

    },
    recoverLife: function(){
        this.lives+1 > 99? this.lives = 99: this.lives++;
    },
}

player.name = "goodPlayer";
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.loseLife();
player.recoverLife();
player.recoverLife();

console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lifes`)