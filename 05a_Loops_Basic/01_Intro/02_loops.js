/*
Thema: Loops (Schleifen) mit Arrays
Wichtig:
- Erstes Element beginnt immer bei Index = 0
- Letzes Element ist bei Index = Array-Länge minus 1
 */

/*
 Beispiele 1 - Arrays mit Index oder mit for-Loop ausgeben
 */

//Array definieren
let klassen = ['ME17', 'ME18', 'ME19', 'ME20'];

//Arrays mit Index ausgeben
console.log(klassen[0]);
console.log(klassen[1]);
console.log(klassen[2]);
console.log(klassen[3]);

//Gleiches Arrays mit for-Loop ausgeben
for(let i=0; i< klassen.length;i++){
    console.log(klassen[i]);
}

//Challenge - Was ist der Vorteil eines Loop-Code?
console.log(klassen);


//Beispiel: HTML-Code generieren
let htmlOutput = '<ul>\n';
for (let i=0; i<klassen.length; i++){
    //htmlOutput = htmlOutput + `\t<li>${i}. Mediamatiker-Klasse ${klassen[i]}</li>\n`;
    htmlOutput += `\t<li>${i}. Mediamatiker-Klasse ${klassen[i]}</li>\n`;
}
htmlOutput += '</ul>';
console.log(htmlOutput);



//Beispiel: Ausgabe generieren anhand von UTF-Codierung
console.log("\nAusgabe mit Parallel-Klassen (Ausgabe mit for)");

let bezeichnung;
let klasse;
for(let i = 0; i < 4; i++) {
    //UTF-16 Hexadezimal 'a' codiert
    //https://asecuritysite.com/coding/asc2
    bezeichnung = 0x61;
    klasse = klassen[i];
    for(let i = 0; i < 4; i++) {
        console.log(`Klasse: ${klasse}${String.fromCharCode(bezeichnung++)}`);
    }
}
































