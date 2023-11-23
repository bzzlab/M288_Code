class Abmachung {
    freunde = [];
    was;
    wann;
    wo;
    todo = [];

    constructor(was, wann, wo) {
        this.was = was;
        this.wann = wann;
        this.wo = wo;
    }

    sendNotification() {
        return `Wo:${this.wo}, Was: ${this.was}, Wann:${this.wann.toLocaleDateString('de-CH')} um ${this.wann.toLocaleTimeString('de-CH')}`
    }
}
module.exports = {
    Abmachung
}
