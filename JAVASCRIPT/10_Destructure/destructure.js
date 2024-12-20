let ob={
    name:"saa",
    age:89,
    skills:["java","sql"]
}
console.log(ob.name);
console.log(ob.age);
console.log(ob.skills);

//! Object destructure
//* name shoulbe same 
let{name,age,skills}=ob

console.log(name);
console.log(age);
console.log(skills);

//! array Destructure
//* any name we can give
let arr=[10,20,30,40]
let[a,b,c]=arr
console.log(a);
console.log(b);
console.log(c);


//! rest Parameter()
//* The rest parameter is used to group the remaining element into an array.
//*It collect "the rest"of the arugument that were not explicitly specified.
//* The rest parameter is represented by three (...)
//* it is used to rest of the values are stored in last element only.
//* we can't stored the first element
let arr1=[10,20,30,40,50]
let[d,e,...f]=arr1

console.log(d);
console.log(e);

console.log(f);

//! spread operator()
//* it is used to combined the two array without using concat()
//* THe spead operator in javaScript allow to expand an array,object,or iterable into indiviual element
//* It is often used to copy,merge,or pass an element.
//* The spread operaor is reresented by (...)
let arr2=[99,89]
let combinedarr=[...arr1,...arr2]
console.log(combinedarr);

//! rest parameter example using function
function person(firstName,...details){
    console.log(firstName);
    console.log(details);
    
    
}
person("Sant","chennai",98777,10)

let ob1={
    name:"sant",
    age:23
}
let ob2={
    city:"chennai"

}
let res={...ob1,...ob2}
console.log(res);
 //! shalllow-copy
 //* In the shallow copy any modification is done also affect the orginal copy
let copy=arr1
copy.push(10)
console.log(copy);
console.log(arr1);
//! Deep copy
//* In the deep copy any modification is done can't affect the orginal copy
//* original copy same doesn't change.
let copy1=[...arr1]
copy1.push(100)
console.log(copy1);

console.log(arr1);



