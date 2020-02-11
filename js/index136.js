const mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];
let str ="";
mutants.forEach(function(name){
    if(name == "Iceman" || name=="Logan" || name=="Phoenix"){
        str +=name;
    }
})

console.log(str);