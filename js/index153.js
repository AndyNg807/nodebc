const arithmetic = {
    add : function(x,y){
        if (typeof x == "number" && typeof y == "number"){
            return x+y;
        }else{
            return "error, please input number";
        }
    },
    subtract : function(x,y){
        if (typeof x == "number" && typeof y == "number"){
            return x-y;
        }else{
            return "error, please input number";
        }
    },
    multiply : function(x,y){
        if (typeof x == "number" && typeof y == "number"){
            return x*y;
        }else{
            return "error, please input number";
        }
    },
    divide : function(x,y){
        if (typeof x == "number" && typeof y == "number"){
            return x/y;
        }else{
            return "error, please input number";
        }
    },
    remainder : function(x,y){
        if (typeof x == "number" && typeof y == "number"){
            return x%y;
        }else{
            return "error, please input number";
        }
    }
}

console.log(arithmetic.add(2,10));
console.log(arithmetic.subtract(10,5));
console.log(arithmetic.multiply(3,100));
console.log(arithmetic.divide(40,2));
console.log(arithmetic.remainder(20,2));