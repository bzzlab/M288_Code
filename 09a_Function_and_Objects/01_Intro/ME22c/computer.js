let computer1 = {
    brand: 'ASUS',
    model: 'ZenBook Flip',
    ram: '32',
    ramUnit: 'GB'
}

let computer2 = {
    brand: 'HP',
    model: 'Elitebook',
    ram: '16',
    ramUnit: 'GB'
}

let computer3 = {
    brand: 'acer',
    model: 'Chromebook',
    ram: '400',
    ramUnit: 'MB'
}

function getInfo(computer)  {
    return {
        manufacturer: `The computer manufactured by "${computer.brand}" is a "${computer.model}".`,
        specs: `It has ${computer.ram}${computer.ramUnit} of ram.`
    }
}

let computer = getInfo(computer1);
console.log(computer.manufacturer + "\n" + computer.specs + "\n\n");

computer = getInfo(computer2);
console.log(computer.manufacturer + "\n" + computer.specs + "\n\n");

computer = getInfo(computer3);
console.log(computer.manufacturer + "\n" + computer.specs + "\n\n");to
