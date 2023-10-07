// Array Destructuring is a javascripr exression that reduces arrays to smaller atomes where the contents of the array can be eaisly accessed and referenced by variables

const cars = ['volve', 'benz', 'camry', 'jeep', 'toyota'];

// consoole.log(cars[0]);
// console.log(cars[1]);

// Array desztructuring
let [volve, benz] = cars; // this picks volvo, skips and camery;

// volvo = 'Limo; // changes vove to Limo

console.log(volve)
console.log(benz)

// spead Operator (...): spreasd the items in an array

const car2 = ['volve2', 'benz2', 'camry2', 'jeep2', 'toyota2'];

const [volvo2, ...restOfArray] = car2;
console.log(volvo2);
console.log(restOfArray);

// The spread operator can also be used to add arrays instead of using the concat() method;

const addCar1Car2 = [...cars, ...car2];
console.log(addCar1Car2);

