let snowboards = [{
    brand: 'Burton',
    binding: 'Burton',
    size: 150.0
},{
    brand: 'Dope',
    binding: 'Marker',
    size: 160.0
},{
    brand: 'Roxy',
    binding: 'Salamon',
    size: 155.0
},{
    brand: 'Nitro',
    binding: 'Atomic',
    size: 155.0
}];

let getSummary = function (snowboard) {
    return {
        summary: `Das Snowboard \"${snowboard.brand}\" mit der Bindung ${snowboard.binding} und 
            der Grösse von \"${snowboard.size}\"`,
        short: `${snowboard.brand}|${snowboard.binding}|${snowboard.size}`
    }
}

for(let i=0;i<snowboards.length;i++){
    let obj1 = getSummary(snowboards[i]);
    console.log(`${obj1.summary}. ${obj1.short}`);
}

let filter1 = snowboards.filter((kriterium) => {
    return kriterium.binding === "Marker"
});
console.log(filter1);

let filter2 = snowboards.filter((kriterium) => {
    return kriterium.size <= 156.0
});
console.log(filter2);


