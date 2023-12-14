//Object 1
let song1 = {
    title: 'Super Bass',
    artist: 'Nicki Minaj',
    duration: 3.20
}
//Object 2
let song2 = {
    title: 'Step back!',
    artist: '1nonly',
    duration: 2.30
}
//function that returns an object literal
let getSummary = function (song) {
    return {
        summary: `The song \"${song.title}\" is sung from ${song.artist}`,
        duration: `The \"${song.title}\" is ${song.duration} minutes long.`
    }
}
//call and result on the console
let obj1 = getSummary(song1);
console.log(`${obj1.summary}. ${obj1.duration}`);

obj1 = getSummary(song2);
console.log(`${obj1.summary}. ${obj1.duration}`);

