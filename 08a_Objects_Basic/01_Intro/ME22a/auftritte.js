let auftritt1={
    wann: new Date('2023-12-12'),
    wo: "Exil",
    wer: "Rain on Mars",
    mitglieder: ['Vivien','Jim','Nils','Andrea','Neva'],
    getInfo(){
        return `Who: ${this.wer}, Where: ${this.wo}, When:${this.toLocaleDateString('de-CH')}`
    }
}

let auftritt2={
    wann: new Date('2023-12-12'),
    wo: "Hallenstation",
    wer: "White Snake",
    mitglieder: ['Bob','John','Marc']
}

let auftritt3={
    wann: new Date('2024-01-12'),
    wo: "Xtra",
    wer: "Rain on Mars",
    mitglieder: ['Vivien','Jim','Nils','Andrea','Neva']
}

console.log(auftritt1.getInfo());
console.log(auftritt2);
console.log(auftritt3);
