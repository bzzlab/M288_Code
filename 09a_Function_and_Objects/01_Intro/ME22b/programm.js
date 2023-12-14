//Mike
let programm1 = {
    name: "After Effects",
    publication: new Date('1993-01-01'),
    rating: "5/5",
    latestversion: 24.1
}
let programm2={
    name: "Vegas Pro",
    publication: new Date('1999-06-01'),
    rating: "4.6/5",
    latestversion: 21
}


let getSummary = function (programm) {
    return {
        summary: `Das Programm \"${programm.name}\" wurde publiziert am \"${programm.publication.toLocaleDateString('de-CH')}\" und hat ein Rating von,
        ${programm.rating}`,
        version: `Das Programm \"${programm.name}\" hat die neuste Version ${programm.latestversion}`
    }
}

let obj1 = getSummary(programm1);
console.log(`${obj1.summary}. ${obj1.version}`);
obj1 = getSummary(programm2);
console.log(`${obj1.summary}. ${obj1.version}`);

