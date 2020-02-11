const tripExpenses = [400, 380, 90];
/*let budget = tripExpenses.reduce(function(acc, val){
    return acc + val;

});*/
let budget = tripExpenses.reduce((acc,val) => acc + val);

console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`);
console.log(`Total trip budget: ${budget}`);


