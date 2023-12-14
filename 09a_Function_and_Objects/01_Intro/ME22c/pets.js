let pet1 = {
    animal: 'rabbit',
    name: 'luna',
    color: 'white',
    favouriteFood: 'vegetable'
}

let pet2 = {
    animal: 'dog',
    name: 'rex',
    color: 'black',
    favouriteFood: 'meat'
}

let pet3 = {
    animal: 'cat',
    name: 'lui',
    color: 'brown',
    favouriteFood: 'fish'
}


let getSummary = function (pet) {
    return {
        summary: `My ${pet.animal} with the colour ${pet.color} is called ${pet.name}`,
        favouriteFood: `My ${pet.animal} loves to eat ${pet.favouriteFood}.`
    }
}

//call and result on the console
let obj1 = getSummary(pet1);
console.log(`${obj1.summary}. ${obj1.favouriteFood}`);

let obj2 = getSummary(pet2);
console.log(`${obj2.summary}. ${obj2.favouriteFood}`);

let obj3 = getSummary(pet3);
console.log(`${obj3.summary}. ${obj3.favouriteFood}`);
