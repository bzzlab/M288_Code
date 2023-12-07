let vorlage = require('./abmachungen_class');

let abmachungen = [];

abmachungen.push(new vorlage.Abmachung('Fussball spielen',
    new Date('2023-11-24T20:00'), "Hardhof"));
abmachungen.push(new vorlage.Abmachung('Skifahren',
    new Date('2023-12-27T10:00'), "Lenzerheide-Talstation"));
abmachungen.push(new vorlage.Abmachung('Silvester',
    new Date('2023-12-31T22:00'), "Zürich"));

for (let i=0;i<abmachungen.length;i++){
    console.log(abmachungen[i].sendNotification())
}
