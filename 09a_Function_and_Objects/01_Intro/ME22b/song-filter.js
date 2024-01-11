let songArray = [{
    title: 'Now that we dont talk',
    author: 'Taylor Swift',
    album: '1989 TV',
    duration: 2.32
}, {
    title: 'Welcome to New York',
    author: 'Taylor Swift',
    album: '1989 TV',
    duration: 3.33
}, {
    title: 'Africa',
    author: 'Toto',
    album: 'Africa',
    duration: 5.1
},{
    title: 'Für Elise',
    author: 'Beethoven',
    album: '-',
    duration: 4.5
}];
//function that returns an object literal
let getSummary = function (song) {
    return {
        summary: `Der Song \"${song.title}\" ist aus dem Album ${song.album} von der Sängerin ${song.author}`,
        duration: `Der Song \"${song.title}\" dauert ${song.duration} minuten.`
    }
}
//call and result on the console
// for(let i=0;i<songArray.length;i++){
//     let obj1 = getSummary(songArray[i]);
//     console.log(`${obj1.summary}. ${obj1.duration}`);
// }

let filter1=songArray.filter((criterium) => {
    return criterium.duration > 3.0;
})
let find1=songArray.find((criterium) => {
    return criterium.duration > 3.0;
})
pars

console.log(filter1);
console.log(find1);
