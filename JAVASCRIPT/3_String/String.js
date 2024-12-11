//! How to declare String
//? By using literal
let str1="hello"
let str2=`HELLO`
let str3 ='Bye'

//! How to know the length
//* length is property not a method,it is used to finding the the length
let length=str1.length
console.log(length)

//! 1.toUpperCase()
//*it is used to convert to upperCase,it returns new String and also using varible we have to store.
let upper=str1.toUpperCase() //HELLO
console.log(str1);//it will not change the original String
console.log(upper);

//! 2.toLowerCase()
//* it is used to convert to lowerCase,it will returns new String and also using varible we have to store.
let lower=str2.toLowerCase()
console.log(lower);//hello
console.log(str2);//it will not change the original String

//! 3.indexOf()
//* it is used to give the index of particular character.
//* it will take the first Occurance
let index=str1.indexOf("o")
console.log(index);
console.log(str1.indexOf('l'));
//! 4.charAt()
//* This method is used to give the character  of the specified index

let charat=str1.charAt(4)
console.log(charat);
console.log(str3.charAt(2));
//! 4.cancat()
let str4='hello'
let str5="how are you"
//* it is used to combine two or more  than 2 Strings and it will give return new string 
let combined=str4.concat(" ",str5," Sant")
console.log(combined);

//!5.trim()
//* it is used to remove thw which spaces from both the sides of the string and it will return one string

let str6=" hello   "
console.log(str6.length);
let trim=str6.trim()
console.log(trim.length);










