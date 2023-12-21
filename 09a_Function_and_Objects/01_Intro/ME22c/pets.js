let pets = [{
    animal: 'rabbit',
    name: 'luna',
    color: 'white',
    favouriteFood: 'vegetable'
},{
    animal: 'dog',
    name: 'rex',
    color: 'white',
    favouriteFood: 'meat'
},{
    animal: 'cat',
    name: 'lui',
    color: 'brown',
    favouriteFood: 'corn'
},{
    animal: 'bird',
    name: 'dug',
    color: 'red',
    favouriteFood: 'corn'
}];


let getSummary = function (pet) {
    return {
        summary: `My ${pet.animal} with the colour ${pet.color} is called ${pet.name}`,
        favouriteFood: `My ${pet.animal} loves to eat ${pet.favouriteFood}.`
    }
}

//call and result on the console

/*let i=0;
while (i<pets.length){
    let obj1 = getSummary(pets[i]);
    console.log(`${obj1.summary}. ${obj1.favouriteFood}`);
    i++;
}*/

let result = pets.filter((criteria) => {
    return criteria.color === "white"
});
console.log("filter:");
console.log(result);

result = pets.find((criteria) => {
    return criteria.color === "white"
});
console.log("find:");
console.log(result);

