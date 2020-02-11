let playerName = "Patrik Laine is lame";
let teams = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
let message = "Winnipeg is the best Canadian city, Go Winnipeg";


let template = `${(playerName.slice(0,12)).toUpperCase()}${message.slice(8,21)}${teams.charAt(46).toUpperCase()}${teams.slice(47,50)} player${message.slice(-13,-8)}${teams.charAt(46).toUpperCase()}${teams.slice(47,50)}!! `;

console.log(template);
