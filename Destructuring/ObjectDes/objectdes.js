const person1 = {
    name: 'John Doe',
    height: '12m',
    age: 40,
    country: 'Nigeria',
    skinColor: 'black',
    address: {
        city: 'Ughelli',
        state: 'Delta'
    }
}

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.address.state);

//using destructuring:

// you can set default values for propertied not listed in the object when destructuring

const {name, age, address:{city, state}, skinColor = 'red'
} = person1;

console.log(name);
console.log(age);
console.log(city);
console.log(state);
console.log(skinColor);

const person2 = {
    fullName: 'Mary Jane',
    height: '15m',
    age2: 20,
    country2:'Canada',
    skinColor: 'black',
    address2:{
        city2:'Alberta',
        state2:'Delta'
    }
}

const {fullName: name2, ...rest} = person2 // name2 should replace the fullname property
console.log(name2);
console.log(rest);

// the spread operator can be used to spread out the properties of an object(s)
console.log({...person1, ...person2}); // Common properties in all objects you are adding/spreading will be listed once(that of the last object). In this case there will be only one "height" property and its the one from "person2"

/*

function callPerson(human){
    console.log(`my name is ${human.name} and I am from ${human.country}`)
}

callPerson(person1);
*/

// using destructuring to do the above:

function callPerson({name, country, address:{city}}){
    console.log(`my name is ${name} and I am from ${country}`)
}

callPerson(person1);