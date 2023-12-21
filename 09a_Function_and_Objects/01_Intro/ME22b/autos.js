//Lou König
//Objekt 1
let autos = [{
    baujahr: '2012',
    marke: 'Ferrari',
    price: 100000
},{
    baujahr: '2000',
    marke: 'BMW',
    price: 90000
},{
    baujahr: '2023',
    marke: 'Pagani',
    price: 3000000
},{
    baujahr: '2020',
    marke: 'Audi A8',
    price: 120000
}]
let getSummary = function (auto) {
    return {
        info: `Der \"${auto.marke}\" kostet CHF ${auto.price}`,
        baujahr: `Der \"${auto.marke}\" wurde im Jahr ${auto.baujahr} gebaut.`
    }
}

/*let i=0;
while (i<autos.length){
    console.log(`${getSummary(autos[i]).info}.\n${getSummary(autos[i]).baujahr}.`);
    i++;
}*/

let find1=autos.find((auto) =>{
    return auto.price < 100000;
});

console.log(find1);
