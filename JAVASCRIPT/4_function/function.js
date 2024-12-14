//! How to declare the function
//* function function_name()
//{
//}
//! How to call the function 
//* by using function_name
//*function_name()
//! 1.Named function

function display() {
    
    console.log("Hello");
    
}
display()
//! i.parameterizied function
function add(a,b) {
    
// let a=10
// let b=20
console.log("Parameter With function");

console.log(a+b);

}
add(12,20)
//! ii.Function with return Value

function sub(a,b)
{
    console.log("Function with return value");
    
    return a-b
}
let res=sub(30,80)
console.log(res);

//! 2.Function with Expression
//* Any function is assigning varible is called as function with Expresion.
//* It is also calles as anomonous function that means without name declaring function name
 let hello=function() {
    console.log("Hello am Sant");
}
hello()

//! 3.Arrow Function
let multiply=()=>{
    console.log("Arrow Function function");
    
}
multiply()
//! 4.Nested Funtion
let outerFunction=()=>
{
    let a=100;
    let innerFunction=()=>
    {
        console.log("Nested Function");
        
        let b=89;
        console.log(a-b);
        
    }
    innerFunction()
}
outerFunction()
//! Lexical Scopping
//* When we are declaring nested function ,inner function can take all the property of outer function but the outer funtion cant't take the  property of the inner function .this is called as Lexical Scopping.

//! Higher order and callBack Function
//*WHen function who taked another function as an arugument or parameter is called as higher order function
//*function which we are sending as parameter is called as callback function


let hi=()=>{
    console.log("I am Hi function");
    
}
let Hello=(a,b,c)=>
{
    console.log("Higher order function and callBack function");
    
    console.log(a);
    console.log(b);
    c()

}
// Hello(10,"abc",hi)
Hello(10,"abc",()=>{
    console.log("Hi how are You");
    
});

//! IIFE
(
    function()
    {
        console.log("IIFE");
        
    }
)()