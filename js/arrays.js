console.log('Arrays');

//Adding Elements

const numbers = [4,5,6];

//Adding in the end
numbers.push(7,8)
console.log(numbers);

//Adding in the beginninng
numbers.unshift(0,1);
console.log(numbers);

//Adding in the middle
numbers.splice(2,0,2,3);
console.log(numbers);

//Remove Elmemnts
//end
console.log(numbers.pop());
console.log(numbers);

//Begining
console.log(numbers.shift());
console.log(numbers);

//Middle
console.log(numbers.splice(0,0));
console.log(numbers);

//Finding the elements(Primitive types)
console.log(numbers.indexOf(8));
console.log(numbers.indexOf(9));
console.log(numbers.includes(6));
console.log(numbers.includes(9));
console.log(numbers.indexOf(6) !== -1);

//Finding the elemnts (OBJ / Reference types)
const courses = [
    {
        id : 1 , name : 'a',
    },
    {
        id : 2 , name : 'b'
    }
];
let cb = courses.find(function(c){
    return c.name === 'b';
});
console.log(cb);

console.log(courses.findIndex(function(c){
    return c.id === 1
}));

//Arrow Function
let course = courses.find(course => course.name === 'a');
console.log(course);

//combining and Slicing
let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second)
console.log(combined);
let slice = combined.slice(2,4);
console.log(slice);

//Spread Operator
let f = [1,2];
let s = [3,4];
let c = [...f,...s];
console.log(c);
//Adding elements using Spread Operator
c = [...f,...s,5,6];
console.log(c);

//Iterating an ARRAY
for(let num of c){
    console.log(num);
}

//Joining Arrays
let m = [1,2,3,4,5,6];
console.log(m);
let res = m.join('-')
console.log(res);
let str = "This is my JAVASCRIPT learning";
let str2 = str.split(' ')
let str3 = str2.join('-')
console.log(str2);
console.log(str3);

//Sorting Array


//Mappiing arrays