//Matti
let fanartikel = [{
    title: 'Heimshirt FC Winterthur 2023/24',
    grössen: 'XS, S, M, L, XL, XXL',
    preis: 79.90,
    type: "Shirt"
},{
    title: 'Auswärtsshirt FC Winterthur 2023/24',
    grössen: 'S, M, L, XL',
    preis: 79.90,
    type: "Shirt"
},{
    title: 'Aufstiegsshirt FC Winterthur 2021/22',
    grössen: 'S, M, L, XL',
    preis: 25.00,
    type: "Shirt"
}, {
    title: 'Fanschal FC Winterthur',
    grössen: 'Standard',
    preis: 25.00,
    type: "Schal"
},{
    title: 'Mütze FC Winterthur',
    grössen: 'gross, klein',
    preis: 30.00,
    type: "Kopfbedeckung"
}];

//function that returns an object literal
let getSummary = function (shirt) {
    return {
        grössen: `Das Shirt \"${shirt.title}\" gibt es in den grössen ${shirt.grössen}`,
        preis: `Das Shirt \"${shirt.title}\" kostet CHF ${shirt.preis}.`
    }
}

for(let i=0;i<fanartikel.length;i++){
    let obj1 = getSummary(fanartikel[i]);
    console.log(`${obj1.grössen}. ${obj1.preis}`);
}
