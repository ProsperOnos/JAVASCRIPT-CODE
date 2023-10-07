// Globally Scope variables: These variables are decleared outside of a function and as such they can be accessed aywhere on the script. ---Global scope

// Locally scoped variables: These variables are declear inside of a function and as such they can only be accessed inside of the said function --- function/local scope


//global scope
const gender = 'male';// global variable

function myFunction(){
    console.log(gender); // gender can be accessed here
}

myFunction();

console.log(gender); // gender can be accessed here

// local scope
function myFunction2(){
    const country = 'Nigeria'; // locally scoped
    // country can be acessed here

    console.log(country);
}

myFunction2();



// console.log(country); // country cannot be accessed here. This will out an undefined error