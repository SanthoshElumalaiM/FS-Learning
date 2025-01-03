 //! DataTypes in JavaScript

 //* 1.primitive DataTypes
 //? i) Number Datatypes
 let a=10;
 console.log(a);
 console.log(typeof a); //number
let b=18.9;
console.log(b);

console.log(typeof b); //number

let c=Number(50);
console.log(c);
console.log(typeof c);


//! 2.boolean

let isplayer=true;
console.log(isplayer);
console.log(typeof isplayer);

let isStudent=false
console.log(isStudent);
console.log(typeof isStudent);

//! 3.String
//?we can declare String two ways
//? i) by using literal
//? ii) by using Object

//? i) by using literal
let str1="hello";
console.log(str1);
console.log(typeof str1);

let str2='hi';
console.log(str2);
console.log(typeof str2);

let str3=`bye`
console.log(str3);
console.log(typeof str3);

//? ii) by using object
let strOb=new String('hello')
console.log(strOb);
console.log(typeof strOb);

//! 4.undefined
let s;
console.log(s);
console.log(typeof s);
//! 5.null
let sal=null;
console.log(sal);
console.log(typeof sal);

//! 6.bigint
let num7=BigInt(498);
console.log(num7);
console.log(typeof num7);

//* 2.Non-primitive dataTypes

//! 1.Array

let arr=[2,'sant',true,undefined]
console.log(arr);
console.log(typeof arr);

//! 2.funtion

function add()
{
    console.log("Hello i am");
    
}
add()

//! 3.object

let Student={
    sname:'sant',
    sid:22,
    phNo:9786011613,
    skills:['java','sql','html','css','manual_testing']
}
console.log(Student);










