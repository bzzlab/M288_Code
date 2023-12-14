let song1 = {
    title: 'Now that we dont talk',
    author: 'Taylor Swift',
    album: '1989 TV',
    duration: 2.32
}
//Object 2
let song2 = {
    title: 'Welcome to New York',
    author: 'Taylor Swift',
    album: '1989 TV',
    duration: 3.33
}
//function that returns an object literal
let getSummary = function (song) {
    return {
        summary: `Der Song \"${song.title}\" ist aus dem Album ${song.album} von der Sängerin ${song.author}`,
        duration: `Der Song \"${song.title}\" dauert ${song.duration} minuten.`
    }
}
//call and result on the console
let obj1 = getSummary(song1);
console.log(`${obj1.summary}. ${obj1.duration}`);
obj1 = getSummary(song2);
console.log(`${obj1.summary}. ${obj1.duration}`);
