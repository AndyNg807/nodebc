const iceCreamFlavors = new Array("Cookies and Cream", "Chocolate", "Vanilla", "Strawberry", "Coffee","Cherry", "Mango", "blueberry", "Raspberry", "Tutti");

let remove = []
remove.push(iceCreamFlavors.pop());
remove.push(iceCreamFlavors.pop());

console.log(iceCreamFlavors);
for (let i = 0; i<=remove.length-1; i++){ 

console.log(`removed flavor: ${remove[i]}`);

}
