// While loop
let myArray = 25
let i = 0;
while (i < myArray){
    console.log("My array: ",i)
    i++
}

// Do while loop
let count = 0;
do {
    console.log("Do while : ", count);
    count++;
    }while (count < 5);
        console.log("Do while stopped!", count);

// For loop < 10
for (let j = 0; j < 10; j++){
    console.log("For loop: ",j)
}

// For loop +3 < 15
for (let j = 0; j < 15; j+=3){
    console.log("For loop (step by 3 [i+=3]): ",j)
}












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
    console.log(`${i} : ${salary}`);
}
