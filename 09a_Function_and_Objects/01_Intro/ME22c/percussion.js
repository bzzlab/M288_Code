let Instruments = [{
    name: 'Glockenspiel',
    art: 'gestimmt',
    material: 'Eisen',
    groesse: 'mittelgross',
    preis: 30.00
},{
    name: 'Marimbaphon',
    art: 'gestimmt',
    material: 'Holz',
    groesse: 'gross',
    preis: 50.00
},{
    name: 'Tambourin',
    art: 'ungestimmt',
    material: 'Holz',
    groesse: 'klein',
    preis: 20.00
},{
    name: 'Kesselpauken',
    art: 'gestimmt',
    material: 'Kupfer',
    groesse: 'riesig',
    preis: 250.00
}];

let eigenschaften = function (instrument) {
    return {
        beschreibung: `Dieses Instrument nennt sich \"${instrument.name}\" und\n`+
            `zählt zur Familie der ${instrument.art}en Instrumenten.\n`+
            `Es ist aus ${instrument.material} und ist relativ ${instrument.groesse}.`
    }
}

let i=0;
while (i<Instruments.length){
    console.log(`${eigenschaften(Instruments[i])
        .beschreibung}`);
    i++;
}

//let filter1=Instruments.filter((criteria) => criteria.material === "Holz");
let filter1=Instruments.filter((criteria) => {
    return criteria.material === "Holz"
});

console.log(`======================================\nInstrumente mit Holz`);
// console.log(filter1);
i=0;
while (i<filter1.length){
    console.log(`Mietbar ${filter1[i].name} (${filter1[i].material}). (Hinweis: ${filter1[i].art})`);
    i++;
}
