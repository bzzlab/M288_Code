// Objekt 01 //

let betten = [{
    label: 'safgod',
    title: 'Doppelbett',
    color: 'Weiß',
    material: 'Holz',
    pillowCount: 4
}, {
    label: 'safalein',
    title: 'Einzelbett',
    color: 'Schwarz',
    material: 'Metall',
    pillowCount: 2
}, {
    label: 'safalein',
    title: 'Einzelbett',
    color: 'Schwarz',
    material: 'Holz',
    pillowCount: 2
}, {
    label: 'seng',
    title: 'Bettsofa',
    color: 'Weiss',
    material: 'Leder',
    pillowCount: 4
}];
let getSummary = function (bett) {
    return {
        summary: `Das \"${bett.title}\" kostet ${bett.price}`,
        pageCount: `Das \"${bett.title}\" ist ${bett.color} und besteht aus ${bett.material}.`
    }
}
for(let i=0;i<betten.length;i++){
    let obj1 = getSummary(betten[i]);
    console.log(`${obj1.summary}. ${obj1.pageCount}`);
}

let filter1=betten.filter((kriterium) => {
    return kriterium.material === "Holz"
})
console.log(filter1);
