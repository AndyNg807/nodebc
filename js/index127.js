const iceCreamFlavors = new Array("Cookies and Cream", "Chocolate", "Vanilla", "Strawberry", "Coffee","Cherry", "Mango", "blueberry", "Raspberry", "Tutti");

let remove = []
remove.push(iceCreamFlavors.shift());
remove.push(iceCreamFlavors.shift());

console.log(iceCreamFlavors);
for (let i = 0; i<=remove.length; i++){ 

console.log(`removed flavor: ${remove[i]}`);

}
