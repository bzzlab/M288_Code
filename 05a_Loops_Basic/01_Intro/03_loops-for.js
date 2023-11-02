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
let klassen = ['ME17', 'ME18', 'ME19', 'ME20', 'ME21', 'ME22', 'ME23'];
let anzahl=0;
for(let i=0;i<klassen.length;i++){
    let klasse = klassen[i];
    let parallelSymbol = 0x61;
    for(let j=0;j<5;j++){
        anzahl++;
        console.log(`${anzahl}. Mediamatiker-Klasse ${klasse}${String.fromCharCode(parallelSymbol)}`);
        parallelSymbol++;
    }
}

