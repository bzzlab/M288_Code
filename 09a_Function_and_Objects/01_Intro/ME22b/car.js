// Objekt 01 //
let car1 = {
    brand: 'Ferrari',
    model: 'Daytona sp3',
    price: 3000000
}
// Objekt 02 //
let car2 = {
    brand: 'Maybach',
    model: 'S Klasse',
    price: 250000
}
let getSummary = function (car) {
    return {
        summary: `Der \"${car.model}\" kostet ${car.price}`,
        pageCount: `Der \"${car.brand}\" hat das Modell ${car.model} .`
    }
}
let obj1 = getSummary(car1);
console.log(`${obj1.summary}. ${obj1.pageCount}`);
obj1 = getSummary(car2);
console.log(`${obj1.summary}. ${obj1.pageCount}`);
