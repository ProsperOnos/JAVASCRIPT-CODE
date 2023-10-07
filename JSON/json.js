// JSON -- Javascript Object Notation

// Json is a text format used for storing and transporting data

var person = {name: 'John', age: 20, country: 'Nigeria'}; // javascript Object
console.log(person.name)
console/log(person.country)
console.log(typeof person);

// JSON.stringify: convert a valid Javascript Object into a JSON string

var myJson1 = JSON.stringify(person) // converts the person Object to a json string/text
console.log(myJson1);
console.log(myJson1.name); // this gives you undefined because myJson1 is no longer an object

// JSON.parse(): Convert a Json string into a valid Js Object. Numbers in A JSON atring are not wrapped inside quotes

var person2 = '{"name": "Mary", "Age": 40 "country": "Nigeria"}'; // This is a JSON String
console.log(person2);
console.log(person2.name); //this returns undefined because person2 is text/string
console.log(typeof person2);

var myObject = JSON.parse(person2);
console.log(myObject);


