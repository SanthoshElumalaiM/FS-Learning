let num1=10;
console.log(typeof num1,num1);
let num2=10.6
console.log(num2,typeof num2);
let num3=Number(10)
console.log(typeof num3 ,num3);
let num4=Number("10")
console.log(num4,typeof num4);
let num5=Number("10abc")//Nan
console.log(num5);
console.log(typeof num5);//Number

//! prompt()
//* Whenever we are taking any value using promt,thr type of the value will be string

// let a=Number(prompt("Enter the One number"))
// let b=Number(prompt("Enter The seconf numner"))
// alert (a+b)

//! Number Method
//! 1.parseInt()
//* whenever taking the input from user we can use it.
let num6=Number.parseInt("10ab")
// let num6=Number.parseInt("a10b")
console.log(num6);

//! 2.parseFloat()
let num7=Number.parseFloat("10.9ab")
console.log(num7);

//! 3.isFinite()

let num8=isFinite(1,2,34)
console.log(num8);

//! 4.isInteger()

let num9=is
console.log(num9);

//! 5.isNaN()







