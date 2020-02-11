function validateUser (username, password) {

    if ((username == "nacho" && password == "Nerd1979") || (username == "pedro" && password == "Batman0217") || (username == "marta" && password == "Mother2312") ) {
        return `Welcome ${username}, nice to see you again`;
    }else{
        return `Please input valid credentials`;
    }

}

console.log(validateUser("pedro", "Nerd1979"));

