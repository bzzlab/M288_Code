// Define a clothing item
let clothingItem1 = {
    title: "T-Shirt",
    brand: "Levis",
    size: "M",
};
let clothingItem2 = {
    title: "Pullover",
    brand: "Oliver",
    size: "L",
};

// Function that returns an object literal for a clothing item
let getSummary = function (clothingItem) {
    return {
        summary: `Das Kleidungsstück \"${clothingItem.title}\" ist von der Marke ${clothingItem.brand}`,
        size: `Das Kleidungsstück \"${clothingItem.title}\" hat die Größe ${clothingItem.size}.`
    };
};

// Call and log the result on the console
let obj1 = getSummary(clothingItem1);
console.log(`${obj1.summary}. ${obj1.size}`);
