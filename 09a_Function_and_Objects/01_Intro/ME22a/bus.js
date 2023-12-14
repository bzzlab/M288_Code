let roterBus = {
    colour: 'red',
    size: 'xl'
}
let gelberBus = {
    colour: 'yellow',
    size: 's'
}
let blauerBus = {
    colour: 'blue',
    size: 'xxl'
}
//function that returns an object literal
let getSummary = function (bus) {
    return {
        summary: `Der Bus \"${bus.colour}\" hat die Grösse ${bus.size}`,
        colour: `Der Bus \"${bus.colour}\" hat die Grösse ${bus.size}.`
    }
}

let obj1 = getSummary(roterBus);
console.log(`${obj1.summary}. ${obj1.colour}`);
obj1 = getSummary(gelberBus);
console.log(`${obj1.summary}. ${obj1.colour}`);
obj1 = getSummary(blauerBus);
console.log(`${obj1.summary}. ${obj1.colour}`);
