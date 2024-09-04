let age = 11;
if(age >= 18)
    {
        console.log('Can vote');
    }
else
{
    console.log('can not vote');
}

let hour = 19;
if(hour >=1 && hour < 12)
    {
        console.log('Good Morning');
    }
else if (hour>=12 && hour < 18)
    {
        console.log('Good Afternoon');
    }
else{
    console.log('Good Evening');
}

//SWTCH
let role = 'Guest';
 switch(role)
 {
    case 'Admin':
        console.log('Admin');
        break;
    case 'Guest':
        console.log('Guest User');
        break;
    case 'Modarator':
        console.log('Modarator User');
        break;
    default: console.log('Unknown User')
 }

 //For Loop
 for(let i=1;i<=5;i++)
    {
        console.log('Hey Buddy!',i);
    }

//While
let n=1;
while(n<=5)
    {
        console.log('Number = ',n);
        n++;
    }

//Do While
let i = 10;
do{
    console.log(i);
    i--;
}while(i>=1);

let person = {
    name:'Manish',
    role:'Developer'
}
//FOR IN
for(let key in person)
    {
        console.log(key,person[key]);
    }

let arr = ['a','b','c','d'];
for(let i in arr)
    {
        console.log(i,arr[i]);
    }

//FOR OF
for(let i of arr)
    {
        console.log(i);
    }

