let boulderRouten = [{
    name: 'Balance',
    schwierigkeit: '5a',
    height: '0.5m',
},{
    name: 'Balance',
    schwierigkeit: '4c',
    height: '2m',
},{
    name: 'Dynamic',
    schwierigkeit: '5c',
    height: '2m',
},{
    name: 'Crackclimbing',
    schwierigkeit: '6b',
    height: '4m',
}];


//function that returns an object literal
let boulderUebersicht = function (boulder) {
    return {
        grade: `Die Boulderroute, welche sich auf \"${boulder.name}\" konzentriert, hat die Schwierigkeit ${boulder.schwierigkeit}`,
        height: `Die Boulderroute \"${boulder.name}\" ist an seiner höchsten Stelle ${boulder.height} hoch.`
    }
};

let i=0;
while (i<boulderRouten.length){
    let obj1 = boulderUebersicht(boulderRouten[i]);
    console.log(`${obj1.grade}. ${obj1.height}`);
    i++;
}
