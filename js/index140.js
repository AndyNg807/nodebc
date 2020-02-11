const mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];

const removed = mutants.filter(value => value != "Magneto" && value != "Iceman" && value != "Gambit")

/*mutants.forEach(function(each, index) {
    if(each =="Magneto" || each == "Iceman" || each == "Gambit"){
        mutants.splice(index,1);
    }
})*/
console.log(removed);
/*console.log(mutants);*/