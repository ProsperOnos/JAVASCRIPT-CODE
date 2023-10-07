// Js Objects are a list of comma seperated naem:value pairs. Objects are written inside of literals --{}

// Objects in Js have properties(keys), values and methods 

const car = {color: 'red', brand:'Toyota', model:2020}
console.log(car);

// The value of the different properties of an onject are accessed with their property name. There are two syntaxes for doing this

// dot notation syntax: object.property

console.log(car.color); // dot noatation

// square bracket notation syntax: object['property']
console.log(car['brand']);

// Modifying the values of an object
car.color = 'green';

console.log(car.color); // color becomes green
console.log(car); // color is green

// Classwork: modify the model to 2023
car.model = 2023;
console.log(car.model);
console.log(car);

const person = {
    name: 'Dawg',
    age: 20,
    skinColor: 'white',
    address:{
        city: 'Ughelli',
        street: '105 market road',
        state: 'Delta'
    },
    country: 'Nigeria',
    hobbies: ['football', 'movies', 'computer games'],
    isVerified: true,

    // An object method is a function stored in property
    fullDetails: function(){
        return`My name is ${this.name} and am from ${this.country}`
        // "this" refers to the Object (owner of these properties)
        // the "this" keyword does not work with arrow function
    }
}

console.log(person);
console.log(person.skinColor);
console.log(person.address.state);
console.log(person.hobbies[2]);
console.log(person.isVerified);

// classwork: change football to cooking

person.hobbies[0] = 'cooking';
console.log(person.hobbies)
console.log(person.fullDetails()); // methods are called with ()

// Assignment: Change state to Niger State
person.address.state = 'Niger';
console.log(person.address.state);
console.log(person.address)


const person2 = {
    name: 'Mary Doe',
    country: 'Ghana',
    age: 20,
    address:{
        city: 'Ughelli',
        street:'105 market road',
        state: 'Delta'
    }
}

// Object.key(): Return the name of the enumerable string properties and methods of an object.

let Objkeys = Object.keys(person2);
console.log(Objkeys);

// Object.value(): Returns an array of values of the enumerable properties of an object

let Objval = Object.values(person2);
console.log(Objval);