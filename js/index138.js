const mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];

const addSymbol = mutants.map(function(value){
    if (value =="Professor X" || value == "Logan" || value == "Phoenix" || value == "Gambit"){
        return value + "<3";
    }else{
        return value;
    }

})

console.log(mutants);
console.log(addSymbol);