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


