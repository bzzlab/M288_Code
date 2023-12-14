//Object 2
let inst2 = {
    instrument: 'Das Klavier',
    art: 'Tasteninstument',
    preis: 500
}

let inst3 = {
    instrument: 'Die Querflöte',
    art: 'Blasinstrument',
    preis: 360
}

//function that returns an object literal
let getSummary = function (inst) {
    return {
        summary: `${inst.instrument} ist ein ${inst.art}`,
        pageCount: `${inst.instrument} kostet ${inst.preis} CHF.`
    }
}

//call and result on the console
let obj1 = getSummary(inst1);
console.log(`${obj1.summary}. ${obj1.pageCount}`);

obj1 = getSummary(inst2);
console.log(`${obj1.summary}. ${obj1.pageCount}`);

obj1 = getSummary(inst3);
console.log(`${obj1.summary}. ${obj1.pageCount}`);
