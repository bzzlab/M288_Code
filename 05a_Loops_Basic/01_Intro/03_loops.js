/*
Thema: Loops (Schleifen) mit Arrays
Wichtig:
- Erstes Element beginnt immer bei Index = 0
- Letzes Element ist bei Index = Array-Länge minus 1
 */
/*
 Beispiele - Arrays mit while-Loop ausgeben
*/

//Array definieren
let klassen = ['ME20', 'ME21', 'ME22', 'ME23'];


//Array mit while-Loop ausgeben
let i = 0;
while (i < klassen.length){
    console.log(`${i}. Mediamatiker-Klasse ${klassen[i]}`);
    i++;
}


//Beispiel: Ausgabe generieren anhand von UTF-Codierung
console.log("\nAusgabe mit Parallel-Klassen (Ausgabe mit for)");

let klasse;
let bezeichnung;
i = 0;
while (i < klassen.length){
    //UTF-16 Hexadezimal 'a' codiert
    //https://asecuritysite.com/coding/asc2
    bezeichnung = 0x61;
    klasse = klassen[i];
    let j = 0;
    while (j < 5){
        console.log(`Mediamatiker-Klasse ${klasse}${String.fromCharCode(bezeichnung++)}`);
        j++;
    }
    i++;
}

//weitere Loop-Varianten gibt es mit do..while, foreach
