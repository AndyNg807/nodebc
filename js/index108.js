function sort (number1, number2, number3) {
let n1 = number1, n2 = number2, n3 = number3;
 if(n1<=n2){
    if(n2<=n3){
        console.log(`${n1}, ${n2}, ${n3}`);
    }else if(n1<=n3){
        console.log(`${n1}, ${n3}, ${n2}`);
    }else{
        console.log(`${n3}, ${n1}, ${n2}`);
    }



 }else if(n1<=n3){
    console.log(`${n2}, ${n1}, ${n3}`);
 }else if(n2<=n3){
    console.log(`${n2}, ${n3}, ${n1}`);
 }else{
    console.log(`${n3}, ${n2}, ${n1}`);
 } 

}

sort(10,8,25);

function sort1 (num1, num2, num3, highToLow){
    let n1 = num1, n2 = num2, n3 = num3;
    if (highToLow){
    if(n1>=n2){
       if(n2>=n3){
           console.log(`${n1}, ${n2}, ${n3}`);
       }else if(n1>=n3){
           console.log(`${n1}, ${n3}, ${n2}`);
       }else{
           console.log(`${n3}, ${n1}, ${n2}`);
       }
   
   
   
    }else if(n1>=n3){
       console.log(`${n2}, ${n1}, ${n3}`);
    }else if(n2>=n3){
       console.log(`${n2}, ${n3}, ${n1}`);
    }else{
       console.log(`${n3}, ${n2}, ${n1}`);
    } 
    }else{
        if(n1<=n2){
            if(n2<=n3){
                console.log(`${n1}, ${n2}, ${n3}`);
            }else if(n1<=n3){
                console.log(`${n1}, ${n3}, ${n2}`);
            }else{
                console.log(`${n3}, ${n1}, ${n2}`);
            }
        
        
        
         }else if(n1<=n3){
            console.log(`${n2}, ${n1}, ${n3}`);
         }else if(n2<=n3){
            console.log(`${n2}, ${n3}, ${n1}`);
         }else{
            console.log(`${n3}, ${n2}, ${n1}`);
         } 
    }
}

sort1(10,8,25,true)
