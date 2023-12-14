//Object 1
let Clup1 = {
    clupname: 'EHC Kloten',
    headcoach: 'Larry Mitchel',
    founding: '1934',
}
//Object 2
let Clup2 = {
    clupname: 'HC Davos',
    headcoach: 'Josh Holden',
    founding: '1918',
}
//function that returns an object literal
let getSummary = function (Clup) {
    return {
        summary: `Der Headcoach des \"${Clup.clupname}\" ist ${Clup.headcoach}`,
        pageCount: `Der Clup \"${Clup.clupname}\" wurde ${Clup.founding} gegründet.`
    }
}
//call and result on the console
let obj1 = getSummary(Clup1);
console.log(`${obj1.summary}. ${obj1.pageCount}`);
obj1 = getSummary(Clup2);
console.log(`${obj1.summary}. ${obj1.pageCount}`);
