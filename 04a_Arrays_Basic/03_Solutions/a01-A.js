/*
Task: Working with arrays
Compute and print array values based on comments below.
 */

//Array of numbers
let numberArray = [ 8.07,3.51,6.16,4.25,3.39,4.48 ];
//Print all elements
console.log(numberArray);//??
//Alternative
let index = 0;
numberArray.forEach(function (zahl){
    console.log(`Zahl ${zahl} bei Index: ${index}`);
    index++;
})
//Print first element
console.log(numberArray[0]);//??
//Print array length
console.log(`array length is ${numberArray.length}`);//??
//Print last element
let lastElement = numberArray.length-1;//??
console.log(`last element is ${numberArray[lastElement]}`);//??






