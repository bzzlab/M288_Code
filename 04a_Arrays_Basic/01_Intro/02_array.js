/*
 Example 2 - Important array methods.
 */

//leeren Array initialisieren
let todoList = [];

//Liste füllen
todoList[0] = "Waschen";
todoList[1] = "Einkaufen";
todoList[2] = "Rechnung 1 zahlen";
todoList[3] = "Rechnung 2 zahlen";
todoList.push('Herbst-Ferien: Hotel buchen');
todoList.push('Herbst-Ferien: Flug buchen');
//Ausgabe
console.log(todoList);

let todoList2 = []
todoList2.push({text:'Next level erreichen!', prio:1})
todoList2.push({text:'Hausaufgaben!', prio:10})
todoList2.push({text:'mit Freund abmachen!', prio:2})
console.log(todoList2)
console.log(`Mein Task "${todoList2[0].text}" hat die Prio: ${todoList2[0].prio}`)


//Todos erledigen resp. die Liste abbauen
//letztes Element löschen
todoList.pop();
console.log('letztes Element gelöscht mit pop:');
console.log(todoList);

//erstes Element löschen
todoList.shift();
console.log(todoList);

//Element an erster Stelle einfügen
todoList.unshift('Mahnung 1 zahlen');
console.log(todoList);

//Index eines Eintrags ermitteln
const todoXY = 'Rechnung 2 zahlen';
console.log(`Index von "${todoXY}" ist ${todoList.indexOf(todoXY)}`);




















