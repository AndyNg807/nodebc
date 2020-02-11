let firstName = "Andy";
let lastName = "Ng";
let nameCharacters = firstName.length;
let lastNameCharacters = lastName.length;
let charsDiff = Math.abs(nameCharacters - lastNameCharacters);

console.log("My first name is " + firstName + " and it is " + nameCharacters + " characters long");
console.log("My last name is " + lastName + " and it is " + lastNameCharacters + " characters long");
console.log("The character difference between my first name and last name is " + charsDiff);
console.log("My first name is longer than my last name: ", nameCharacters > lastNameCharacters);



