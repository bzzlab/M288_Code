class Auftritt {
    wann;
    wo;
    wer;
    #mitglieder=[];

    constructor(wann, wo, wer) {
        this.wann = wann;
        this.wo = wo;
        this.wer = wer;
    }

    getInfo(){
        return `Who: \"${this.wer}\", Where: ${this.wo}, When:${this.wann.toLocaleDateString('en-US')}`+
            `, Band members: ${this.#mitglieder}`;
    }


    get mitglieder() {
        return this.#mitglieder;
    }

    set mitglieder(value) {
        this.#mitglieder = value;
    }
}

//variant 1 - named export
export { Auftritt }
//variant 2 - default export
//export default Auftritt;
