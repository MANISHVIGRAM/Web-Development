let circle = {
    width : 2,
    height:3,
    calType : {
        a : 'square',
        b : 'rectangle'
    },
    calArea : function()
    {
        console.log(a*h);
    }
};
console.log(circle);

//Camal Notation : oneTwoThreefour
//Factory Function
function createCircle(width,height)
{
    return{
        width,
        height,
        calArea(width,height){
            return(width*height)
        }
    };
};
let circle1 = createCircle(2,4);
console.log(circle1);
console.log(circle1.calArea(8,8))
console.log(circle1.constructor);

//Pasacl Notation : OneTwoThgreeFour
//Constructor
function Circle(width,height)
{
    this.width = width,
    this.height = height,
    this.calArea = function(width,height)
    {
        return width*height
    }
};
let circle2 = new Circle(10,20);
console.log(circle2);
console.log(circle2.calArea(10,20));
console.log(circle2.constructor);

//Dynamic nature of an object 
//Adding new properties and deleting properties
const car = {
    tyre : 4,
    engine : 1
}
console.log(car);
car.headLight = 2;
car.drive = function()
{
    console.log('Drving! Driving!');
}
console.log(car);
delete car.drive;
console.log(car);

//Cloning
let obj = {...circle2};
console.log(obj);

//GC
//----

