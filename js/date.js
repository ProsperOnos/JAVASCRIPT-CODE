// The date constructor

let date = new Date();// date constructor

console.log(date); // date and time =- GMT + 1
console.log(date.toTimeString()); // just the time- GMT + 1
console.log(date.toDateString()); // just the date

// toUTCString() -- GMT
console.log(date.toUTCString()); // date and time - GMT

// local date and time
console.log(date.toLocaleString()); // date and time in your local date and time
console.log(date.toLocaleTimeString()); // local time
console.log(date.toLocaleDateString()); // local date



// date get methods:

// getFullYear()
console.log(date.getFullYear());

// getMonth(): 0 to 11
console.log(date.getMonth() + 1); // this gives you the accurate month.
const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let currentMonth = months[date.getMonth()];
console.log(currentMonth);

// getDate(); this gets you the day of the month
console.log(date.getDate());

// getDay(); this gets you the day of the week, Js days are numbered zero to 6
console.log(date.getDay() + 1);

// Assignment: create a "days of the week array" to get the current day of the week

const DayofWk = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

console.log(DayofWk[date.getDay()])

// getHours(): this gets you the current hour
console.log(date.getHours());

// getMinuites(): This gets the current minutes
console.log(date.getMinutes())

// getSeconds(): This gets you the current seconds
console.log(date.getSeconds());


// date set methods: This methods are used to set date and time in Javascript;

// the date constructor can be altered using the first method

// setFullYear()
const setYr = new Date();
setYr.setFullYear(2021);
console.log(setYr)

// setMonth
const setMonth = new Date();
setMonth.setMonth(5);
console.log(setMonth);
console.log(setMonth.toLocaleDateString());

// satDate(): this sets the day of the  month to any specified day
const setDate = new Date();
setDate.setDate(1);
console.log(setDate);

// setHours(): 0 to 23
const setHr = new Date();
setHr.setHours(7);
console.log(setHr);

// Assignment: do for setSeconds() and setMinutes()

//setMinutes(): 0 - 59
const setMin = new Date();
setMin.setMinutes(14)
console.log(setMin.toLocaleTimeString());
// setSeconds(): 0 - 59
const setSec = new Date();
setSec.setSeconds(23) 
console.log(setSec)
console.log(setSec.toLocaleTimeString())
// Seconds are numbered 0 - 59 and the same applies to minutes