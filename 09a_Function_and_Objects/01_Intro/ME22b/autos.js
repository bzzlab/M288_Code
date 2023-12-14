//Lou König
//Objekt 1
let auto1 = {
    baujahr: '2012',
    marke: 'Ferrari',
    price: 100000
}
//Objekt 2
let auto2 = {
    baujahr: '2000',
    marke: 'BMW',
    price: 90000
}
let getSummary = function (auto) {
    return {
        summary: `Der \"${auto.marke}\" kostet CHF ${auto.price}`,
        pageCount: `Der \"${auto.marke}\" wurde im Jahr ${auto.baujahr} gebaut.`
    }
}
let obj1 = getSummary(auto1);
console.log(`${obj1.summary}. ${obj1.pageCount}`);
obj1 = getSummary(auto2);
console.log(`${obj1.summary}. ${obj1.pageCount}`);
