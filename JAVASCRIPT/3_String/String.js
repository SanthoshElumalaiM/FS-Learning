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
//! 5.cancat()
let str4='hello'
let str5="how are you"
//* it is used to combine two or more  than 2 Strings and it will give return new string 
let combined=str4.concat(" ",str5," Sant")
console.log(combined);

//!6.trim()
//* it is used to remove the white spaces from both the sides of the string and it will return one string

let str6=" hello   "
console.log(str6.length);//9
let trim=str6.trim()
console.log(trim.length);//5

//! 7.includes()
//* it is used to chech the whether any character or string is present or not.
//* if it is present it will give true otherwise it will return false.

console.log(str6.includes('o'));//true
console.log(str6.includes('i'));//false
console.log(str6.includes(' '));//true

//! 8.startsWith()
//* it is used to check whether first charcter is startwith  for specific character or not
//* if it is present it will return true otherwise return false.
console.log(str1.startsWith('h'));
//! 9.endwith()
//* it is used to check whether last charcter is endwith  for specific character or not
//* if it is present it will return true otherwise return false.
console.log(str1.endsWith('o'))
//! 10.split()
//*it is used to convert any string to array
let str7="hi how are"
let arr=str7.split(" ")
console.log(arr);
console.log(arr.length);

//! 11.slice()
//* it is used to extract the character or string from another string
//* it will take two parameters (startIndex,endIndex)
//* it will not includes the endIndex vlaue..
let str8="hi how are you"
console.log(str8.slice(3,6));
//* if we don't give the endIndex ,then from starting it will pirnt till the length of the string.
console.log(str8.slice(2));
//* we can give negative value as an index,it will take from last
console.log(str8.slice(-3));
console.log(str8.slice(5,-2));
//* we can't give startIndex greater than endIndext.it we can it will give empty
console.log(str8.slice(4,0));

//! 12.subString()
//* it is also used to extract the string from another string
//* it will take two parameters(StartsIndex,endIndex)
//* it will not includes the endIndex vlaue.

//* we can't give negative value .it will converted to 0.
console.log(str8.substring(-4));
//*it wil swap these two string
console.log(str8.substring(5,3));













