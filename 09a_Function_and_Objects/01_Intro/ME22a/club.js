//Object 1
let Clubs = [{
    clupname: 'EHC Kloten',
    headcoach: 'Larry Mitchel',
    founding: '1934',
    won: 135
},{
    clupname: 'HC Davos',
    headcoach: 'Josh Holden',
    founding: '1918',
    won: 160
},{
    clupname: 'ZSC Lions',
    headcoach: 'Marc Crawford',
    founding: '1930',
    won: 280
},{
    clupname: 'Ambri Piota',
    headcoach: 'Luca Cereta',
    founding: '1935',
    won: 90
}];

//function that returns an object literal
let getSummary = function (club) {
    return {
        info: `Der Headcoach des \"${club.clupname}\" ist ${club.headcoach}`,
        founded: `Der club \"${club.clupname}\" wurde ${club.founding} gegründet.`
    }
}
//call and result on the console

/*let i=0;
while (i<Clubs.length){
    console.log(`${i}`);
    let obj1 = getSummary(Clubs[i]);
    console.log(`${obj1.info}. ${obj1.founded}`);
    i++;
}*/

let wins = Clubs.filter((gewinne) => {
    return gewinne.won > 100;
})
console.log("filter:");
console.log(wins);

wins = Clubs.find((gewinne) => {
    return gewinne.won > 100;
})
console.log("find:");
console.log(wins);
