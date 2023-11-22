let geraete1 = {
    bezeichnung: "Laufband",
    marke: "Assualt",
    no: 1,
    anschaffung: new Date('2020-11-16')
}
let geraete2 = {
    bezeichnung: "Laufband",
    marke: "Assualt",
    no: 2,
    anschaffung: new Date('2021-12-16')
}
let geraete3 = {
    bezeichnung: "Home-Trainer",
    marke: "Kettler",
    no: 1,
    anschaffung: new Date('2019-04-16')
}


let geraeteListe = [];
geraeteListe.push(geraete1);
geraeteListe.push(geraete2);
geraeteListe.push(geraete3);

console.log(geraete3.bezeichnung);

console.log("Inventar der Geräte:")
for(let i=0;i<geraeteListe.length;i++){
    console.log(geraeteListe[i].bezeichnung);
}
