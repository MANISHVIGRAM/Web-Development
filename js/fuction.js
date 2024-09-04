//Function Declaration
function speak(name)
{
    console.log(name,"Is Speaking");
}
speak('Manish');

//Function Expression
//Anonymous
let run = function(){
    console.log('Run');
}
run();
let move = run ;
move();

//Hoisting
//It the procss of moving the function declarations to the top of file 
//And it is automaticaly by js machine while executing the code 

//Arguments
// function sum (){
//     let total =0
//     for (let t of arguments)
//         total += t;
//     return total;
// }
console.log(sum(1,2,3,4,5,6));

//Rest Operator
//...args -> pass as parameter n should b the last parameter of an function
