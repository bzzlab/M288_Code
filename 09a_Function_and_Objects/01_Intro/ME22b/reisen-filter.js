let reiseziele = [{
    ziel: "Nazaré",
    sehenswuerdigkeit: ["Big Wave Museum", "Cafe XY", "Beach"],
    dauer: '4'
}, {
    ziel: "Paris",
    sehenswuerdigkeit: ["Eiffelturm", "Louvre", "Centre Pampidou"],
    dauer: '4'
},{
    ziel: "Malediven",
    sehenswuerdigkeit: ["Unterwasserwelt", "Beach", "Tierwelt"],
    dauer: '10'
}]

let getSummary = function (Reiseziel) {
    return {
        summary: `Das Reiseziel nach ${Reiseziel.ziel} führt zu der Sehenswürdigkeit "${Reiseziel.sehenswuerdigkeit}" und dauert ${Reiseziel.dauer}.`,
        pageCount: `Geniessen Sie Ihre Zeit in ${Reiseziel.ziel} und besuchen Sie den ${Reiseziel.sehenswuerdigkeit}!`,
    };
};
for(let i=0;i<reiseziele.length;i++){
    let obj1 = getSummary(reiseziele[i]);
    console.log(`${obj1.summary}. ${obj1.pageCount}`);
}

let filter1=reiseziele.filter((kriterium) => {
    return kriterium.ziel === "Malediven"
})
console.log(filter1);
