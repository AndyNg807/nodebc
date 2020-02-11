function showNumbers(start, end) {
    if (start == end || typeof start != "number" || typeof end != "number"){
        console.log( "please input two difference vaild number");
    }else if(start < end) {
        for (let i = start; i<=end; i++){
             console.log(i);
             
        }
    }else {
        for (let i = start; i>=end; i--){
            console.log(i);
        }
    }
}

showNumbers(0,1000);
showNumbers(1000,0);
showNumbers(100,100);
showNumbers("100",300);