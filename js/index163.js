const add = function () {
    let result = 0;
    for( var i = 0; i < arguments.length; i++ ){
        result += arguments[i];
      }
  
    return result;
  };

console.log(add(1,3,5,7,9));

console.log(add(1,3,5,7,9,11,13,15,17,19));