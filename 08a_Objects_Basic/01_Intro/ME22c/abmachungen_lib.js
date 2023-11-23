let freundesKreis2 = ["Giona", "Loris", "Kareem"];


module.exports = {
    freunde: ["Sebastian","Nico","Chiano","Dylan"],
    was: "Fussball spielen",
    wann: new Date('2023-11-17 19:00'),
    wo: "fussballplatz",
    todo: ["Fussball", "Trinkflasche","Fussballschuhe","Sportkleider"],
    sendNotification(){
        return `${this.was}, ${this.wann.toLocaleDateString('de-CH')}, ${this.wo}`
    }
}

/*let abmachung2 = {
    freunde: freundesKreis1,
    was: "Film anschauen",
    wann: new Date('2023-11-25 20:00'),
    wo: "Kino Abaton",
    todo: ["Snacks", "Cola","gute Stimmung"],
    sendNotification(){
        return `${this.was}, ${this.wann.toLocaleDateString('de-CH')}, ${this.wo}`
    }
}

let abmachung3 = {
    freunde: freundesKreis2,
    wann: new Date('2023-12-22 7:00'),
    was: "Ski fahren",
    wo: "Lenzerheide",
    todo: ["Skiausrüstung", "Geld", "Skipass", "Ski-Map"],
    sendNotification(){
        return `${this.was}, ${this.wann.toLocaleDateString('de-CH')}, ${this.wo}`
    }
}*/

