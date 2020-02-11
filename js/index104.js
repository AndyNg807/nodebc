const fibonacci = function(){
    let f0 = -1;
    let f1 = 1;
    let f = 0;

    for (let num =1; num <=10; num++){
    f = f0 + f1;
    f0 = f1;
    f1 = f
    console.log(f);
    }
}

for(let x=1; x<=3; x++){
    fibonacci();
    
    }