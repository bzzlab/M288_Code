//Object
let shoe3 = {title: 'Nike SB', price: 180}
//Object 4
let shoe4 = {title: 'Nike Dunk', price: 127}
//Object 5
let shoe5 = {title: 'Adidas Samba', price: 209}
//function that returns an object literallet
getSummary = function (shoe) {
    return {
        summary: `Der Schuh \"${shoe.title}\"`,
        price: `Der Schuh \"${shoe.title}\" kostet ${shoe.price} Franken.`
    }
}
//call and result on the console
let obj2 = getSummary(shoe3);
console.log(`${obj2.summary}. ${obj2.pageCount}`);
obj2 = getSummary(shoe4);
console.log(`${obj2.summary}. ${obj2.pageCount}`);
obj2 = getSummary(shoe5);
console.log(`${obj2.summary}. ${obj2.pageCount}`);
