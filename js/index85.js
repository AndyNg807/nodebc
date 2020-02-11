let f0 = -1;
let f1 = 1;
let f = 0;
let num = 1;
do {
    f = f0 + f1;
    f0 = f1;
    f1 = f
    console.log(f);

    num++

}while (num <= 10)