// `node guide.js` - to check log 

// Creating variables
let myArray = 25; // can change
const myArray2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; // can not change

console.log("myArray: ",myArray);
console.log("myArray2: ",myArray2);

// While loop 
console.log("\n")
let i = 0;
while (i < myArray){
    console.log("While loop (myArray): ",i)
    i++
}

// Do while loop
console.log("\n")
let count = 0;
do {
    console.log("Do... (count<5): ", count);
    count++;
    }
    while (count < 5);
        console.log("while... (count<5)", count);

// For loop < 10
console.log("\n")
for (let j = 0; j < 10; j++){
    console.log("For loop (j<10): ",j)
}

// For loop +3 < 15
console.log("\n")
for (let j = 0; j < 15; j+=3){
    console.log("For loop ([i+=3]<15): ",j)
}

// For of loop
console.log("\n")
for (let j of myArray2){
    console.log("For of loop (myArray2): ",j)
}

// For in
console.log("\n")
const salaries = {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
console.log("Salaries (for in...): ", salaries)
for ( let i in salaries) {
    // add a currency symbol
    let salary = salaries[i] + "$";
    // display the values
    console.log("for in.. (Salary): ",salary);
}

// Functions - [ https://www.youtube.com/watch?v=lWldunWaLPs&list=PLxkN9e3dfloGjlGqz4Pl-TtIXLi7lOf3F ]
console.log("\n")
function timesTwo(num) {
    return 2 * num;
}
let result1 = timesTwo(5);
let result2 = timesTwo(2000);
console.log("twoTimes function: (5)", result1,"\ntwoTtimes function: (2000)",result2)

function manyTimes(num) {
    let total = 4 * num
    return total * 3;
}
console.log("manyTimes function: (1)[(4*i)*3]", manyTimes(1), "\nmanyTimes function: (5):", manyTimes(5))

// Reverse an Array
console.log("\n")
function reverseArray(array) {
    let newArray = [];
    for (let i = array.length -1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}
let reversedArray = reverseArray([1, 2, 3, 4, 5]);
let reversedArray2 = reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log("Reversed array (1,2,3..5): ", reversedArray, "\nReversed Array (1,2,3..10): ", reversedArray2)

// Multiplying two arrays
console.log("\n")
function multipyAll(array1, array2) {
    if (array1.length !== array2.length) return undefined;
// every item in array 1 * every item in array 2
    let total = 0;
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            total += array1[i] * array2[j];
        }
    }
    return total;
}
let result3 = multipyAll([1, 2], [5, 6]);
let result4 = multipyAll([1, 2, 3, 4], [5, 3, 1, 8]);
console.log("Result3 : [1, 2],[5, 6]", result3, "\nResult4 [1, 2, 3, 4],[5, 3, 1, 8]: ", result4);

// Built in methods
console.log("\n")
let arr =  [1, 2, 3, 4];
// Adding and removing to the end of array
console.log("\n")
arr.push(5); console.log("arr = [1, 2, 3, 4]\narr.push(5): ", arr);
arr.pop(); console.log("arr.pop()", arr);
// Adding and removing to front of array
console.log("\n")
arr.unshift(0); console.log("arr.unshift(0): ", arr);
arr.shift(); console.log("arr.shift(): ", arr);






// mit találtál
// code ami példázza mit találtál