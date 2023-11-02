let greetUser = function (anrede){
    console.log(`*****************************************************`);
    console.log(`Hallo ${anrede}.\nIch wünsche Ihnen einen angenehmen schönen Tag.`);
    console.log(`*****************************************************`);
}
/*
greetUser("liebe Jasmin!");
greetUser("lieber Vincenz!");
*/

function add(a,b){
    if (a === undefined || b === undefined){
        console.log(`Please provide two parameters a and b for the add-Function!`)
    } else {
        console.log(`Sum of ${a}+${b}=${a+b}`);
    }
}
let sub = (a,b) => {
    if (a === undefined || b === undefined){
        console.log(`Please provide two parameters a and b for the add-Function!`)
    } else {
        console.log(`Subtraction of ${a}-${b}=${a-b}`);
    }
}

//add(2,1000);
//sub(1000,134124123);


for(let a=0;a<10;a++){
    for(let b=1000;b<1500;b++){
        add(a,b);
        sub(b,a);
    }
}

