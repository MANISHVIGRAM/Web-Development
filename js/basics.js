console.log('I am Manish!!!');

//Declaring Variables
let n = 'Manish';
console.log(n);

let secondName;
secondName = 'Vigram';
console.log(secondName);

//Declaring Comnstants i.e Final values
console.log('CONSTANTS');

const pi = 3.14;
console.log(pi);

const BikeCC = 650;
console.log('GT ' + BikeCC);

//Different types of datatypes
let name = 'Manish'; //String Literal
let age = 23; //Number Literal
let isApproved = true; //Boolean Literal
let lastName; // undefined 
let LastName = undefined; //Explicit 
let selectedNumber = null; 

//Type of a varibale
console.log(typeof name);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof lastName);
console.log(typeof LastName);
console.log(typeof selectedNumber);

//Reference Type - OBJECTS
// KEY : VALUE pair
let bike = {
    bikeName : 'RC',
    bikeCC : 390 
};
console.log(bike);
console.log(bike.bikeName);
console.log(bike.bikeCC);

//Accessing the object's properties
//By using dot notation
bike.bikeName = 'GT';
bike.bikeCC = 650;
console.log(bike);
console.log(bike.bikeName);
console.log(bike.bikeCC);

//By using bracket notation
bike['bikeName'] = 'Ducati PANIGALE';
bike['bikeCC'] = 1100;

console.log(bike);
console.log(bike.bikeName);
console.log(bike.bikeCC);
console.log(typeof bike);

//ARRAYS are objects , dynamic
let colors = ['Red','Blue','Black'];
colors[3] = 'White';
colors[4] = 8;

console.log(colors);
console.log(colors.length);

//Functions
function Years (years){
    console.log('David is '+years+' old.')
}
Years(33)

function square(number)
{
    return number * number;
}
console.log(square(5));