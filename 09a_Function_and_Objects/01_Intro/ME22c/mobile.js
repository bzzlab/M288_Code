let Mobiles = [{
    name: 'Iphone 12',
    hersteller: 'Apple 2012',
    gigabyte: 500
},{
    name: 'Iphone 13',
    hersteller: 'Apple 2020',
    gigabyte: 125
},{
    name: 'Iphone 14',
    hersteller: 'Apple 2024',
    gigabyte: 256
}];

let getSummary = function (iphone) {
    return {
        summary: `Das Mobile \"${iphone.name}\" ist vom Hersteller ${iphone.hersteller}`,
        memory: `Das Mobile \"${iphone.name}\" hat ${iphone.gigabyte} Gigabyte.`
    }
}

for(let i=0;i<Mobiles.length;i++){
    let obj1 = getSummary(Mobiles[i]);
    console.log(`${obj1.summary}. ${obj1.memory}`);
}
