/*
 Example 2 - Important array methods.
 */
let todoListe = [];

todoListe.push("Kurzprojekt bearbeiten")
todoListe.push("Essen einkaufen")
todoListe.push("Freundin treffen")
todoListe.push("Musik hören")
todoListe.push("Einkaufen")
console.log(todoListe)
todoListe.shift()
console.log(`erstes Element entfernt: ${todoListe}`);
todoListe.pop()
console.log(`letztes Element entfernt: ${todoListe}`);
todoListe.pop()
console.log(`letztes Element entfernt: ${todoListe}`);
todoListe.unshift('Mahnung bezahlen')
console.log(`ein Element an erster Stelle hinzugefügt: ${todoListe}`);

let todo = 'Essen einkaufen';
console.log(`Index von ${todo} ist ${todoListe.indexOf(todo)}. Stelle`)
