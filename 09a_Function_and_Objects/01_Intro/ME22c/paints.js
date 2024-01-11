//Object 1
let artList = [{
    title: 'Der Kuss',
    artist: 'Gustav Klimt',
    year: 1909
},{
    title: 'Rosa Periode',
    artist: 'Pablo Picasso',
    year: 1906
},{
    title: 'Impression, aufgehende Sonne',
    artist: ' Oscar-Claude Monet',
    year: 1872
}];

//function that returns an object literal
let getSummary = function (art) {
    return {
        summary: `Das Kunstwerk \"${art.title}\" ist vom Künstler ${art.artist}`,
        year: `Das Kunstwerk \"${art.title}\" wurde im Jahr ${art.year} fertiggestellt.`
    }
}

// for(let index=0;index < artList.length; index++){
//     let obj1 = getSummary(artList[index]);
//     console.log(`${obj1.summary}. ${obj1.year}`);
// }

let filter1 = artList.filter((art) => {
    return art.year < 1900;
})

console.log(filter1)
