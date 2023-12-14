//Object 1
let font1 = {
    Name: 'Montserrat',
    Künstler: 'Julieta Ulanovsky',
    Schriftschnitte: 18
}

//Object 2
let font2 = {
    Name: 'Helvetica',
    Künstler: 'Max Miedinger',
    Schriftschnitte: 51
}

//Object 3
let font3 = {
    Name: 'Times New Roman',
    Künstler: 'Stanley Morison; Victor Lardent',
    Schriftschnitte: 12
}

//function that returns an object literal
let getSummary = function (font) {
    return {
        summary: `Die Schrift \"${font.Name}\" ist vom Schriftdesigner/in ${font.Künstler}`,
        Schriftschnitte: `Die Schrift \"${font.Name}\" hat ${font.Schriftschnitte} Schriftschnitte.`
    }
}

//call and result on the console
let obj1 = getSummary(font1);
console.log(`${obj1.summary}. ${obj1.Schriftschnitte}`);

obj1 = getSummary(font2);
console.log(`${obj1.summary}. ${obj1.Schriftschnitte}`);

obj1 = getSummary(font3);
console.log(`${obj1.summary}. ${obj1.Schriftschnitte}`);
