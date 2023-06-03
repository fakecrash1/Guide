// Creating variables
let myArray = 25
const myArray2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] // can not change

console.log(myArray)
console.log(myArray2)

// While loop - 
let i = 0;
while (i < myArray){
    console.log("While loop: ",i)
    i++
}

// Do while loop
let count = 0;
do {
    console.log("Do... : ", count);
    count++;
    }while (count < 5);
        console.log("while...", count);




// For loop < 10
for (let j = 0; j < 10; j++){
    console.log("For loop: ",j)
}

// For loop +3 < 15
for (let j = 0; j < 15; j+=3){
    console.log("For loop (step by 3 [i+=3]): ",j)
}


// For of loop
for (let j of myArray2){
    j+=3
    console.log("For of loop ([j+=3]): ",j)
}







/*
// For in

const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log("Salary: ",salary);
}
*/