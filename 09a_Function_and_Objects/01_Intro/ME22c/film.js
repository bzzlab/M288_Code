let film = {
    title: 'Rush Hour',
    author: 'Brett Ratner',
    year: 1998,
    genre: 'Comedy',
    time: '98 Minutes',
    isBestseller: true,
    getInfo: function() {
        return `${this.title} by ${this.author}, ${this.time} long, released in ${this.year}.`;
    }
};

let drink = {
    brand: 'RedBull',
    model: 'Viva Mate',
    year: '2020',
    color: 'Yellow and Green',
    isBio: true,
    about: function() {
        return `The ${this.brand} ${this.model} in ${this.color} was released in ${this.year}.`;
    }
};

// Beispielaufrufe

console.log(film.getInfo());
console.log(drink.about());
