const mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];

for(let i=0; i<mutants.length; i++){
    if (mutants[i] != "Magneto"){
        console.log(mutants[i]);
    }else{
        break;
    }

}

mutants.splice(mutants.indexOf("Magneto"),1);

for(let i=0; i<mutants.length; i++){
    console.log(`Name: ${mutants[i].toUpperCase()}  item position: ${i}`)
}
