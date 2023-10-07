// Js Math Object allows us to carry out mathematical task on numbers

// Number methods

// syntax: Math.method(x)

// Math.round(x): The value is rounded to the nearest integer.

console.log(Math.round(5.7)) // 6
console.log(Math.round(5.4)) // 5
console.log(Math.round(-5.5)) // -5
console.log(Math.round(-5.6)) // -6

// Math.celi(x): round up to the nearest integer
console.log(Math.ceil(5.7)) // 6
console.log(Math.ceil(5.1)) // 6
console.log(Math.ceil(-5.7)) // -5

// Math.Floor(x): returns the nearest interger
console.log(Math.floor(5.6)) // 5
console.log(Math.floor(5.2)) // 5
console.log(Math.floor(-5.3)) // -6

// Math.trunc(x): returns the interger part of x
console.log(Math.trunc(4.6)) // 4
console.log(Math.trunc(4.3)) // 4
console.log(Math.trunc(-4.3)) // -4
console.log(Math.trunc(-4.7)) //--4

// Math.sqrt: This returns you the square root of x
console.log(Math.sqrt(64)) // 8
console.log(Math.sqrt(16)) // 4

// Math.pow(x, y): Returns x raised to the power of y
console.log(Math.pow(4, 3)) // 64

// Maths.abs(x): returns the absolute(positive) value of x;
console.log(Math.abs(4.5)) // 4.5
console.log(Math.abs(-4.5)) // 4.5

// Math.min(series of numbers) and Math.max(series of numbers)

console.log(Math.min(20, 10, 5, 40, 20, 3)) // returns the smallest number - 3

console.log(Math.max(20, 10, 5, 40, 20, 3)) // returns the biggest number - 40

// Math.random(): This returns a random number between 0 (inclusive) and 1 (not inclusive)

console.log(Math.random());// btw 0 and 1(not inclusive)

console.log(Math.random() * 10); // btw 0 and 9.999

console.log(Math.floor(Math.random() * 10)) // 0 and 9

console.log(Math.floor(Math.random() * 11)) // 0 and 10

console.log(Math.floor(Math.random() * 100)) // 0 and 99

console.log(Math.floor(Math.random() * 101)) // 0 and 100
