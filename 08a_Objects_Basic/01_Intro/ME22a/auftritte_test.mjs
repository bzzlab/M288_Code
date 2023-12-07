//variant 1 - named import
import { Auftritt } from './auftritte_class.mjs';
//variant 2 - default import
//import Auftritt from './auftritte_class.mjs';


let auftrittsListe = [];
auftrittsListe.push(new Auftritt(new Date('2024-01-14'),"Exil, Zurich", "Rain on Mars"));
auftrittsListe.push(new Auftritt(new Date('2024-01-21T21:00'),"Rote Fabrik, Zurich",
        "Rain on Mars"));
auftrittsListe.push(new Auftritt(new Date('2024-01-21T20:00'),"Rote Fabrik, Zurich",
        "Züri West"));
auftrittsListe.push(new Auftritt(new Date('2024-02-15'),"Zentral-Wäscherei, Zurich",
        "Rain on Mars"));
auftrittsListe.push(new Auftritt(new Date('2024-02-16'),"Zentral-Wäscherei, Zurich",
        "Züri West"));

for(let i=0;i<auftrittsListe.length;i++){
    if (auftrittsListe[i].wer === "Rain on Mars"){
        auftrittsListe[i].mitglieder = ['Vivien','Neva','Jim','Andrea','Nils'];
    }
    if (auftrittsListe[i].wer === "Züri West"){
        auftrittsListe[i].mitglieder = [
            'Kuno Lauener',
            'Gert Stäuble',
            'Peter von Siebenthal',
            'Markus Fehlmann',
            'Oliver Kuster',
            'Wolfgang Zweiauer'
        ];
    }
    console.log(auftrittsListe[i].getInfo())
}
