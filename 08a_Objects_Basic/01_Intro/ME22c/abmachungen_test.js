/*
//copy by reference
const {Abmachung} = require("./abmachungen_lib");
let abmachung2 = abmachung1;
//copy by value
let abmachung2 = Object.create(abmachung1);
abmachung2.freunde = ["Giona", "Loris", "Kareem"];
abmachung2.was ="Film anschauen";
abmachung2.wann = new Date('2023-11-25 20:00');
abmachung2.wo= "Kino Abaton";
abmachung2.todo = ["Snacks", "Cola","gute Stimmung"];

console.log(abmachung1);
console.log(abmachung2);*/

let abmachung = require('./abmachungen_class');
let abmachung1 =
    new Abmachung('Fussball spielen',
        new Date('2023-11-24T20:00'), "Hardhof");
console.log(abmachung1.sendNotification())
