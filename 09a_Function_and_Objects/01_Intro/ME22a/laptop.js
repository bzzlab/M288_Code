let laptop1 = {
    cpu: 'i9-12900H',
    gpu: 'RTX 3060',
    ram: '32GB'
}
//Object 2
let laptop2 = {
    cpu: 'i7-12700H',
    gpu: 'RTX 3070',
    ram: '32GB'
}
//function that returns an object literal
let getSummary = function (laptop) {
    return {
        summary: `CPU des Laptops \"${laptop.cpu}\" GPU des Laptops ${laptop.gpu} RAm des Laptops ${laptop.ram}`
    }
}
//call and result on the console
let obj1 = getSummary(laptop1);
console.log(`${obj1.summary}`);
obj1 = getSummary(laptop2);
console.log(`${obj1.summary}`);
