function getShapePerimiter(base, height){
    let shape, result;
    
    if(base == height){
        shape = "square";
    }else{
        shape = "rectangle";
    }
    let perimiter = base * 2 + height *2;
    if(perimiter>100){
        result = "The perimiter is to big";
    }else{
        result = "The perimiter is fine";
    }
    console.log(`${shape} is the shape perimiter`);
    console.log((result));
    
    
}

getShapePerimiter(50,30);
getShapePerimiter(10,30);
getShapePerimiter(20,20);
getShapePerimiter(500,500);