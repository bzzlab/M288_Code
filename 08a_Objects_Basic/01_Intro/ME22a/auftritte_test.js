let Lib = require('./auftritte_class');

let auftrittsListe = [];
auftrittsListe.push(new Lib.Auftritt(new Date('2024-01-14'),"Exil, Zurich", "Rain on Mars"));
auftrittsListe.push(new Lib.Auftritt(new Date('2024-01-21'),"Rote Fabrik, Zurich", "Rain on Mars"));
auftrittsListe.push(new Lib.Auftritt(new Date('2024-02-15'),"Zentral-Wäscherei, Zurich", "Rain on Mars"));

for(let i=0;i<auftrittsListe.length;i++){
    console.log(auftrittsListe[i].getInfo())
}
