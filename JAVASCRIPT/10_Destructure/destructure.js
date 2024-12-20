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
//* it is used to rest of the values are stored in last element only.
//* we can't stored the first element
let arr1=[10,20,30,40,50]
let[d,e,...f]=arr1

console.log(d);
console.log(e);

console.log(f);

//! spread operator()
//* it is used to combined the two array without using concat()

let arr2=[99,89]
let combinedarr=[...arr1,...arr2]
console.log(combinedarr);




