let ProhLang = 'JavaScript';
console.log(ProhLang);

const school = 'R.N.Oxford';
console.log(school);

//Arithmetic Operator
let x = 20;
let y = 40;
let z = 2;

console.log(x + y);
console.log(y - x);
console.log(x / z);
console.log(x % z);
console.log(x ** z);

//Increment same for decrement
let a = 1;
console.log(++a);
 let aa = 22;
 console.log(aa++);
 console.log(aa);
 console.log(--aa);

 //Comparison Operator
console.log(a >=1);
console.log(a<=1);
console.log(a>1);
console.log(a<1);

//Equality Operator
//1.Strict Equaliy Operartor sholud  have same type and value
console.log(2 === 2);
console.log('2' === 2);
//2.Lose Equality Operator, Type conversion 
console.log('1' == 1);//  in this case string to string

//Ternary Operator
let age = 21;
let ans = age >= 18 ? 'Can VOTE' : 'Can not VOTE';
console.log(ans);

//Logical Operator
//AND
console.log(true && true);
console.log(true && false);
//OR
console.log(true || false);
//NOT
console.log(!false);

//Swapping values
let r = 'Red';
let b = 'Blue';
let c;
c=r;
r=b;
b=c;
console.log(r);
console.log(b);
