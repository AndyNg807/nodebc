const user = {};
user.username = "batman", 
user.password = "Alfred1960KPO!";

function shouldOpenBatCave(username){
    return user.username == username? true : false;
}


//shouldOpenBatCave("batman", "Alfred1960KPO!")? console.log(`Welcome back ${user.username}!!`) : console.log(`Sorry, you can't enter the Batcave, try again..`);
console.log(shouldOpenBatCave("batman", "Alfred1960KPO!")? `Welcome back ${user.username}!!` : `Sorry, you can't enter the Batcave, try again..`);
