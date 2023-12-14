//Object 1
let brand1 = {
    name: 'Nike',
    color: 'black',
    size: 'M'
}
//Object 2
let brand2 = {
    name: 'Adidas',
    color: 'white',
    size: 'L'
}
//function that returns an object literal
let getSummary = function (brand) {
    return {
        summary: `Die Marke ${brand.name} ist eine Deutsche Marke und produziert hochwertige Schuhe.`,
        color: `Die Marke ${brand.name} produziert Schuhe in der Farbe ${brand.color}.`,
        size: `Die Marke ${brand.name} produziert Schuhe in der Größe ${brand.size}.`
    }
}
//call and result on the console
let obj1 = getSummary(brand1);
console.log(`${obj1.summary}. ${obj1.color}. ${obj1.size}`);
obj1 = getSummary(brand2);
console.log(`${obj1.summary}. ${obj1.color}. ${obj1.size}`);

