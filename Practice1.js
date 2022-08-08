// Create one function with zero parameter having a console statement;

add();
function add()
{
    let a=10;
    let b=20;
    let sum= a+b;
    console.log(sum);
}


//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function add1(x,y)
{
let sum=0;
sum=x+y;
console.log(sum);
}

add1(3,4);

//Create one arrow function

const multiplication = (a1,b1) => 
{
    let result;
    result= a1*b1;
    console.log(result);
}

multiplication(15,13);



// Print the output
var x = 21;
var girl = function () 
{
    console.log(x);  // undefined
    var x = 20;
};
girl ();




//print the output
var x = 21;
girl ();
console.log(x)   
function girl() 
{
    console.log(x);  // undefined
    var x = 20;
};



// "Print output

var x = 21;
a();  // output:-  20
b(); // output :-- 40
console.log(a); //output :- 40
a = function() {
    
   x = 20;  // data type is not defined
  console.log(x); // value is:- 20
};
b = function() {
    
    x = 40;     // data type is not defined
   console.log(x);
};



// Write a function that accepts parameter n and returns factorial of n

let n=5;
fact=1;
for (let i=n; i>=1; i--)
{
    fact=fact*i;
    console.log(fact);
}