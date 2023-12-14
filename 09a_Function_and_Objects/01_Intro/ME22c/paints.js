//Object 1
let art1 = {
    title: 'Der Kuss',
    artist: 'Gustav Klimt',
    year: 1909
}

//Object 2
let art2 = {
    title: 'Rosa Periode',
    artist: 'Pablo Picasso',
    year: 1906
}

//Object 3
let art3 = {
    title: 'Impression, aufgehende Sonne',
    artist: ' Oscar-Claude Monet',
    year: 1872
}

//function that returns an object literal
let getSummary = function (art) {
    return {
        summary: `Das Kunstwerk \"${art.title}\" ist vom Künstler ${art.artist}`,
        year: `Das Kunstwerk \"${art.title}\" wurde im Jahr ${art.year} fertiggestellt.`
    }
}

//call and result on the console
let obj1 = getSummary(art1);
console.log(`${obj1.summary}. ${obj1.year}`);

obj1 = getSummary(art2);
console.log(`${obj1.summary}. ${obj1.year}`);

obj1 = getSummary(art3);
console.log(`${obj1.summary}. ${obj1.year}`);
