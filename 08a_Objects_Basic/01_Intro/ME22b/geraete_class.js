class Geraete {
    bezeichnung;
    marke;
    no;
    anschaffung;
    abschreibung;


    constructor(bezeichnung, marke, no) {
        this.bezeichnung = bezeichnung;
        this.marke = marke;
        this.no = no;
    }
}
/*
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
*/


let geraeteListe = [];
geraeteListe.push(new Geraete("Laufband","Assault",1));
geraeteListe.push(new Geraete("Home-Trainer","Kettler",2));
geraeteListe.push(new Geraete("Cross-Trainer","Kettler",3));
geraeteListe.push(new Geraete("Cross-Trainer","Kettler",4));
geraeteListe.push(new Geraete("Cross-Trainer","Kettler",5));
geraeteListe.push(new Geraete("Home-Trainer","Kettler",6));
geraeteListe.push(new Geraete("Home-Trainer","Kettler",7));

console.log("Inventar der Geräte:")
for(let i=0;i<geraeteListe.length;i++){
    console.log(`Geräte: ${geraeteListe[i].bezeichnung}, 
    Number: ${geraeteListe[i].no}, `);
}
