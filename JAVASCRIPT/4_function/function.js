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
console.log(a+b);

}
add(12,20)
//! ii.Function with return Value

function sub(a,b)
{
    
    return a-b
}
let res=sub(30,80)
console.log(res);

//! 2.Function with Expression
//* Any function is assigning varible is called as function with Expresion.
//* It is also calles as anomonous function 
 let hello=function() {
    console.log("Hello am Sant");
}
hello()

//! 3.Arrow Function
let multiply=()=>{
    console.log("Am multiply function");
    
}
multiply()


