//variant 1 - named import
import { Abmachung } from './abmachungen_class.mjs';
//variant 2 - default import
//import Person from './04a_class.mjs';

let abmachungen = [];

abmachungen.push(new Abmachung('Fussball spielen',
    new Date('2023-11-24T20:00'), "Hardhof"));
abmachungen[0].freunde=['Kareem','Loris','Giona'];
abmachungen.push(new Abmachung('Skifahren',
    new Date('2023-12-27T10:00'), "Lenzerheide-Talstation"));
abmachungen[1].freunde=['Giona'];
abmachungen.push(new Abmachung('Silvester',
    new Date('2023-12-31T22:00'), "Zürich"));
abmachungen[2].freunde=['Kareem','Loris','Giona','Sebastian','...'];

for (let i=0;i<abmachungen.length;i++){
    abmachungen[i].todo = ['Trinkflasche mitnehmen','Snack  mitnehmen','Humor'];
    console.log(abmachungen[i].sendNotification())
}
