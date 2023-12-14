let SimRig1 = {
    Codename: "Moza Pro Setup",
    Wheelbase: "Moza r21",
    Wheel: "Moza FSR",
    Pedals: "Moza CRP"
};
let SimRig2 = {
    Codename: "Fanatec pro Setup",
    Wheelbase: "Fanatec DD Pro",
    Wheel: "Fanatec F1",
    Pedals: "Fanatec Clubsport"
};
let SimRig3 = {
    Codename: "Cammus amateur Setup",
    Wheelbase: "Cammus DD15",
    Wheel: "Cammus Formula style",
    Pedals: "Cammus Pro Pedals"
};
let getSummary = function (SimRig) {
    return {
        summary: `Das Rig heisst ${SimRig.Codename} und hat eine ${SimRig.Wheelbase} Wheelbase`,
        pageCount: ` Es hat ein ${SimRig.Wheel} Lenkrad und ${SimRig.Pedals} Pedalen`
    };
};
let obj1 = getSummary(SimRig1);
console.log(`${obj1.summary}. ${obj1.pageCount}`);
let obj2 = getSummary(SimRig2);
console.log(`${obj2.summary}. ${obj2.pageCount}`);
let obj3 = getSummary(SimRig3);
console.log(`${obj3.summary}. ${obj3.pageCount}`);
