let params = process.argv;
params = params.slice(2);

function dice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if(!params[0] || !params[1]) {
    console.log('missing parameters: min max')
} else
{
    console.log(`draw dice (numbers from ${params[0]} to ${params[1]}):`+
        `${dice(parseInt(params[0]), parseInt(params[1]))}`);
}
