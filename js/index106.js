function getUserID(){
    return 50;
}

function isUserValid(){
if(getUserID()>30){
    return true;
}else{
    return false;
}

}

function outside(){
    if(isUserValid()){
        return "User valid";
        
    }else{
        return "User not valid";
        
    }

}

console.log(outside());

