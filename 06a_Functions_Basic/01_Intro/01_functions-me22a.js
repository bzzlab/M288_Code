/*
let greetUser = function (){
    console.log(`Hallo`)
}
//Aufruf
greetUser();

let greetUser2 = function (anrede){
    console.log(`Hallo ${anrede}. Ich wünsche Ihnen bald einen schönen Abend.`)
}
//Aufruf
greetUser2("Andrea");


let greetUser4 = () => {
    console.log(`Hallo`)
}
//Aufruf
greetUser4();

let greetUser5 = (anrede) => {
    console.log(`Hallo ${anrede}. Ich wünsche Ihnen bald einen schönen Abend.`)
}
//Aufruf
greetUser5("Andrea");*/


let add = (a,b) => {
    if (a === undefined || b === undefined){
        console.log(`Please provide two parameters a,b for the addition!`)
    } else {
        console.log(`${a}+${b}=${a+b}!`)
    }
}


for(let a=0;a<10;a++){
    for(let b=1000;b<10000;b++){
        add(a,b);
    }
}

